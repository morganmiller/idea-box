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

  def edit
    @idea = Idea.find(params[:id])
  end

  def update
    idea = Idea.find(params[:id])
    idea.update(idea_params)
    redirect_to ideas_path
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :status)
  end
end
