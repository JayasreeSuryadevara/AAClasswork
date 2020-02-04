require 'active_support'
require 'active_support/inflector'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res, params)
    @req = req
    @res = res
    @params = req.params.merge(params)
    @already_built_response = false
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response #== @res
  end

  # Set the response status code and header
  def redirect_to(url)
    if !@already_built_response
      res.location = url
      res.status = 302
      @already_built_response = true
      @session.store_session(res)
    else
      raise "double render error" 
    end
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    if !@already_built_response
      res['Content-Type'] = content_type
      res.write(content)
      @already_built_response = true
      @session.store_session(res)
    else
      raise "double render error" 
    end

  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
   
      #File.dirname(__FILE__) + "relative/path/to/file")
      dir_name = File.dirname(__FILE__)
      controller_name = self.class.name.underscore
      file_path = File.join(dir_name, "..", "views", controller_name, "#{template_name}.html.erb")
      content = File.read(file_path)
      render_content(ERB.new(content).result(binding), 'text/html')
  
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(@req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    p name
    self.send(name)
  end
end

