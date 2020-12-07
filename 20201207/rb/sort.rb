#gem ransack
#controller
def index
    @q = current_user.tasks.ransack(params[:q])
    @tasks = @q.result(distinct: true).recent
end

#index.html.slim
h1 タスク一覧
= search_form_for @q, class: 'mb-5' do |f|
    .form-group.row
        = f.label :name_cont, '名称', class: 'col-sm-2 col-form-label'
        .col-sm-10
            = f.search_field :name_cont, class: 'form-control'
    .form-group-row
        = f.label :created_at_gteq, '登録日時', class: 'col-sm-2 col-form-label'
        .col-sm-10
            =f.search_field :created_at_gteq, class: 'form-control'
    .form-group
        = f.submit class:'btn btn-outline-primary'

= link_to '新規登録', new_task_path, class: 'btn btn-primary mb-3'

#app/models/tasks.rb
class Task < ApplicationRecord
    def self.ransackable_attributes(auth_object = nil)
        %w[name created_at]
    end

    def self.ransackable_associations(auth_object = nil)
        []
    end
end