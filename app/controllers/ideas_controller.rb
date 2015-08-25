class IdeasController < ApplicationController
  def index
    @ideas = Idea.all
  end

  def create
    idea = Idea.create(title: params["title"], body: params["body"])
    render json: idea
  end

  def destroy
    idea = Idea.find(params[:id])
    idea.destroy!
    render json: ""
  end
end
