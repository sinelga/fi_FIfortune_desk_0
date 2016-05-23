
cp org/fortunetellers/fort*.jpg .
mogrify -resize 350x fortuneteller*.jpg
#

source image-shadow.bash

for i in fortuneteller*.jpg
do
   echo "Welcome $i "
      image-shadow $i
done


#cp orgimg/*.jpg .

#mogrify -resize x500 SMS*.jpg

