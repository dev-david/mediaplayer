class Song < ActiveRecord::Base
	attr_accessible :artist, :title, :mediafile
	has_attached_file :mediafile
	validates :artist, presence: true, length: { maximum: 50 }
	validates :title, presence: true, length: { maximum: 50 }
	validates_attachment :mediafile, presence: true,
									content_type: { content_type: ['audio/mp3', 'audio/mpeg'] },
									size: { less_than: 11.megabytes }	
end
