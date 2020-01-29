require 'rails_helper'

RSpec.describe User, type: :model do
  # before(:each) do
    subject(:user) do
      User.create!(
        email: "test@test.com",
        password: "hunter2"
      )
    end
  # end

  describe "validations" do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6).on(:create) }
  end

  describe "password_encryption" do
    it "encrypts the password before storing" do
      expect(user.password_digest).not_to equal(user.password)
    end
  end

  describe "find_by_credentials" do
    it "finds the user matching the user/password" do
      test_user = User::find_by_credentials("test@test.com", "hunter2")
      expect(test_user).to_not raise_error
    end
  end

  describe "generate_session_token" do
    it "genrates a new session for a new user" do
      token = User::generate_session_token
      expect(token.length).to equal(22)
    end
  end

  describe "#reset_session_token" do
    it "resets the user's session token" do
      session_token = user.session_token
      # # user.log_out!
      # # user.log_in
      # login_user!(user)
      # logout_user!(user)
      user.reset_session_token!
      expect(user.session_token).not_to eq(session_token)
    end
  end

end
