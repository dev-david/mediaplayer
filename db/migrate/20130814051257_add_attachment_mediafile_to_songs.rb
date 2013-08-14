class AddAttachmentMediafileToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :mediafile
    end
  end

  def self.down
    drop_attached_file :songs, :mediafile
  end
end
