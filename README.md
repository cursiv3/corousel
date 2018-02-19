Simple photo carousel React component. Simply place photo URLs or paths into an array and pass it
to the `images` prop on the Carousel component:

```
    var pictures = [
        './somepath/toPic.jpg',
        'https://www.myphotourl.com/thisPic',
        'https://www.myphotourl.com/thisPic2'
    ];


    <Carousel images={pictures} />
```

And that's it!


Default width/height are set to 600w x 400h.
Change that using the height or width props:

```
    <Carousel images={pictures} height={300} />
    <Carousel images={pictures} width={1500} />
    <Carousel images={pictures} height={300} width={1500} />
    //etc
```

The "legend" defaults to dots, but if the array is larger than 15 it changes to
a number display in the bottom right corner.

You can force this by using the ```legend``` prop on the component and setting
it to the string "numbers":

```
    <Carousel images={pcitures} legend={"numbers"} />

    // any other value given to legend is ignored and the dots are shown
```


Simple and I hope lightweight and easy to use.  I plan on updating and giving an
api to control slide speed, image fadein/out amount and speed, button size, and
an autoplay.  Stay tuned!
