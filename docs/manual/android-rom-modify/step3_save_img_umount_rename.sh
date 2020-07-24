echo "Saving image as system_new.img" &&
sudo make_ext4fs -T 0 -S file_contexts -l 2048M -a system system_new.img /mnt/system &&
echo "umount" &&
sudo umount /mnt/system &&

echo "renaming old file as .bak" &&
mv system.transfer.list system.transfer.list.bak &&
mv system.new.dat system.new.dat.bak
