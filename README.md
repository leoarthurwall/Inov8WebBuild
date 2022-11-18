# INOV8 WEB BUILD

Welcome to the Inov8 web build. A responsive single page website built to design spec using React.js and styled components. 

It responds to Mobile, Tablet, Laptop and desktop view ports.

The key objective of this was to build a webpage according to design-spec whilst meeting the deadline.

Furthermore, it was an opportunity to get to grips with the web vitals/ lighthouse for referenc eon how the site performs.

## PROCESS

I started by analysing the design spec for desktop (1920w). 

I then broke the design into 7 key sections and set up the src/components accordingly.

Next, I built each section on order, making sub-components where necessary. For instance, Section one had a notification component, which I build as a child component and then imported it into Section one. This kept the code more tidy.

Once all 7 sections were built for  desktop (1920w), I went though each section again to make the sizes responsive between desktop (1920w) and desktop (1280w). I'd use the designs for each desktop size as a reference.

Next I repeated the proces for tablet (768w) and then mobile (428w). 

In some cases I used custom media query break points as this enabled smoother responsivenes. For instance, in section 5, the row of 4 shoes broke naturally at 1700w to create 2 columns, and then again at 700w for one column. The breakpoint at 700w was because the buttons, according to the design remained at 300w for all devices, so I took that into account when finding the natural break point. 

After the webpage was made mobile responsive, I ran a lighthouse test to see how it performed. You can see the results for mobile and desktop below. 

## FUTURE STEPS

## TASKS

1 - make tablet responsive - DONE
2 - make mobile responsive - DONE
3 - correct alt tags - DONE
4 - global styles (colors, fonts, queries)
5 - add code to change img file depending on screen size (srcset)
6 - report web vitals - lighthouse score (DONE - Initial)
7 - Documentation (Readme)
8 - Comment code
9 - refactor code
10 - Deploy site - DONE

## DEPLOYED SITE

https://inov8lw.netlify.app/

## Lighthouse Scores

### Mobile - Initial scores (once build was finished)

![InitialLighthouseOverall](public/images/lighthouseSummaryInitialMobile.png)
![InitialLighthouseMetrics](public/images/lighthouseMetricsInitialMobile.png)
![InitialLighthouseOpportunities](public/images/lighthousePerformanceInitialMobile.png)

### Desktop - Initial scores (once build was finished)

![InitialLighthouseOverall](public/images/lighthouseSummaryInitialDesktop.png)
![InitialLighthouseMetrics](public/images/lighthouseMetricsInitialDesktop.png)
![InitialLighthouseOpportunities](public/images/lighthouseOpportunitiesInitialDesktop.png)

### - lighthouse: moving forward

Performance seems to be the area of improvement, particuarly for mobile. According to the lighthouse analysis, it is largely to do with the images.

Moving forward, I will create a react srcset for all image sizes. This should improve performance.

### the solution srcSet?

I tried implementing the srcSet attribute on the header image in section one as followed:

```
    srcSet="/assets/desktop/header.jpg 1920w, /assets/tablet/header.jpg 768w, /assets/mobile/header.jpg 428w "

    sizes="(max-width 428px) 100vw, (max-width 768px) 100vw, (max-width 1950px) 100vw"
```

I didn't manage to get it to work. So this will be something I look into in the future to help improve performance. 

For now I will use conditional rendering media queries.


## QUESTIONS

1 - height of each section: the heights vary between sections, what's the best way to calculate them? Fit everything within a set viewport (vh100), or based on spacing between section content?