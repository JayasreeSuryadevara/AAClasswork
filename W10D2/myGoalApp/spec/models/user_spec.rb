require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    email: "test@test.com"
    password: "hunter2"
  end

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

    it "validates the password correctly" do
      BCrypt::Password.new(user.password)
    end
  end
end
