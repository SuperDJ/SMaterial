<template>
    <div>
        <article class="row">
            <section class="xs12">
                <h1 class="xs12 text--red-400">Typography</h1>

                <p>
                    If you're looking for a specific font I would recommend to look at Google Fonts.
                    However for this framework and for Material Design in general Roboto is used.
                    To use Roboto you can use the code shown at the side/ below in the <code>header</code> tag.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="font">Font</h2>

            <section class="xs12 sm6">
                <p>
                    If you're looking for a specific font I would recommend to look at <a href="//fonts.google.com/">Google Fonts</a>.
                    However for this framework and for Material Design in general Roboto is used.
                    To use Roboto you can use the code shown at the side/ below in the <code>header</code> tag.
                </p>

                <p>
                    If you need to change the font family it is recommended to change this in the <code>settings.scss</code> file. 
                    In this file you can specify the font family for each type scale 
                </p>
            </section>
            
            <section class="xs12 sm6">
                <code>
                    &lt;link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i" rel="stylesheet">
                </code>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12">Type scale</h2>

            <section class="xs12 sm6">
                Each type scale as defined in the documentation has its own class.
                Some type scales are already set to a specific HTML element:
            </section>

            <section class="xs12 sm6">
                <h1>h1 / .h1</h1>
                <h2>h2 / .h2</h2>
                <h3>h3 / .h3</h3>
                <h4>h4 / .h4</h4>
                <h5>h5 / .h5</h5>
                <h6>h6 / .h6</h6>
                <div class="subtitle-1">.subtitle-1</div>
                <div class="subtitle-2">.subtitle-2</div>
                <div class="body-1">body / .body-1</div>
                <div class="body-2">.body-2</div>
                <div class="caption">.caption</div>
                <div class="overline">.overline</div>
            </section>
        </article>
    </div>
</template>