# Greetings Novus Studio!

## To run the app

```js
cd novus-client
npm run serve
```

## Notes
- As the desktop (1440px) and mobile (414px) views had a few differing elements, specifically, different section descriptions, a different 6th section image, a different contact email address, a different company name in the Footer title and Copyright section, and different colored separator lines between privacy & terms links — I've set up conditional rendering, where once the screen reaches the breaking point of 948px in width and achieves the single column layout, then the elements are swapped for the ones displayed in the Figma mobile design, to ensure a match.
- I've added a '.' to the second sentence in the Footer.
- Initially I intended to remove the redundant 'our' word in the 5th section's description's second sentence, however I decided against it to maintain the 1:1 design match in this case.

## Miscellaneous

- Source of font: https://github.com/Westley-Tan/brandon-grotesque
