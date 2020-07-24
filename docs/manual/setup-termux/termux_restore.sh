# 可以传入一个参数作为文件地址
if [ -n "$1" ]; then
    DIST_FILE=$1
else
    DIST_FILE=/sdcard/termux-backup.tar.gz
fi

echo "DIST_FILE=${DIST_FILE}"

read -p ">>> Confirm restore? (y/n)" CONT
if [ "$CONT" = "n" ]; then
  echo "Cancel";
  exit
else
  echo "Start restore"
fi

termux-setup-storage &&
rm -rf home
tar -zxvf /sdcard/termux-backup.tar.gz home
cp ./usr/bin/busybox ./tar
rm -rf usr
unset LD_PRELOAD
./tar -zxvf /sdcard/termux-backup.tar.gz usr

echo "Restore complete: ${DIST_FILE}"
echo "Please force restart termux"
