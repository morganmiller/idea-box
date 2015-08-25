class Seed
  def initialize
    create_ideas
  end

  def create_ideas
    5.times do |t|
      Idea.find_or_create_by(title: "Idea #{t}", body: "This is my body for idea #{t}", quality: random_quality)
    end
    puts "Your ideas have been seeded!"
  end

  def random_quality
    [0,1,2].sample
  end
end

Seed.new
