function positive(x, y)
        {
            if(x % 3== 0 || y % 7 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        console.log(positive(12));
        console.log(positive(13));