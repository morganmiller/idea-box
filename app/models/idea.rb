class Idea < ActiveRecord::Base
  enum quality: [:swill, :plausible, :genius]
  default_scope -> { order(created_at: :desc) }
end
