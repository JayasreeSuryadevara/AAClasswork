require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  def initialize(req)
    cookie = req.cookies["_rails_lite_app"]
    # p cookie
    if cookie
      @data = JSON.parse(cookie)
      p @data
      # p session[:pho]
    else
      @data = {}
    end
  end

  def [](key)
    @data[key]
  end

  def []=(key, val)
    @data[key] = val
  end
 # value, path, domain
  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
    # path = "/"  # path: "/", value: @data(JSON) "_rails_lite_app"
    res.set_cookie("_rails_lite_app", {path: "/", value: @data.to_json })
  end
  # def set_cookie(key, value)
  #   cookie_header = get_header SET_COOKIE
  #   set_header SET_COOKIE, ::Rack::Utils.add_cookie_to_header(cookie_header, key, value)
  # end
end
