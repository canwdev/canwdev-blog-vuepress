# 可以传入一个参数作为文件地址
if [ -n "$1" ]; then
    DIST_FILE=$1
else
    DIST_FILE=/sdcard/termux-backup.tar.gz
fi

echo "DIST_FILE=${DIST_FILE}"

read -p ">>> Confirm backup? (y/n)" CONT
if [ "$CONT" = "n" ]; then
  echo "Cancel";
  exit
else
  echo "Start backup"
fi

termux-setup-storage &&
cd /data/data/com.termux/files &&
tar -czvf $DIST_FILE home usr &&

echo "Back complete: ${DIST_FILE}"
