


#cp orgimg/*.jpg .

#mogrify -resize x200 SMS*.jpg
#

source bgimage-shadow.bash

for i in SMS*.jpg
do
   echo "Welcome $i "
      image-shadow $i
done


#cp orgimg/*.jpg .

#mogrify -resize x500 SMS*.jpg

