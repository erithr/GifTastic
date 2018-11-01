# GifTastic

### Overview
Taking everything i learned from the dynamic-elements exercise as well as the puasing gifs solution i cobbled together a neat API call 
page that loads Gifs based on buttons that can be dynamically added with a text input.

1. **Creating Buttons From An Array**
    First thing i had to do was set up an array to call from for my initial buttons, taking the animals concept from an earlier exersise i took that format and created an array.
2. **For Loops For Buttons**
    Taking my array i created a for loop to append my buttons dynamically from the array and placing them into my buttons location ID that i set up in my html page. This will all be nested inside my renderButtons Function.
3. **Making EvenMore BUttons**
    Now that i have my for loop creating buttons based on what is in my array. I can now push more buttons to the page by creating a text box to input more items into my array. Taking the example from the movie button exersie i can use the text input to .push() the input of the text into the array which will also again run my renderButtons function from earlier.
4. **Whoah It's Pictures**
    Now that i have all these neat buttons i need to have an event listner for the buttons to actually trigger our API call. Sadly i cant code in a $() for an element that does not exist in the HTML. So i need to do a $(Document).on to be able to have an on click fucntion work for the buttons that did not exist when the page was first opened but after the pages loads the JS and the dynamically added buttons are made. Now that it can actually do something when the buttons are pressed this triggers our API call and this dynamically adds our GIFs to the page as still images. 
5. **Why Won't the Pictures Move**
    To help my mobile users be able to not loose so much DATA on their movile plan all the GIFs load in not moving, Using another $(Document).on function I have coded in to the button click function for the pictures to come in with data-still and data-animate attributes. With these attributes I can code in a boolean to run on click when a picture is clicked to swap from the data-still unmoviing picture to a data-animate GIF like everyone wants. 

### Link To Project
https://erithr.github.io/GifTastic/