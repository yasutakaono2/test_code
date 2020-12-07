class Post
    serialize :options, JSON
end

class PostsController < ApplicationController
    def post_params
        all_options = params.require(:post)[:options].try(:permit!)
        params.requrie(:post).permit(:title).merge(:options => all_options)
    end
end