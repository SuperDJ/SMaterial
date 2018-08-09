<template>
    <div>
        <article class="row">
            <section class="xs12 sm6">
                <p>
                    There are a couple types of progress indicators that you can use. For now you can use the
                    <a href="#determinate">determinate</a>, <a href="inderterminate">inderterminate</a> and <a href="#circle">circle</a> 
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="determinate">Determinate</h2>

            <section class="xs12 sm6">
                <p>
                    For the determinate progress indicator all you have to do is wrap a 
                    <code>.progress__bar</code> element inside a <code>.progress--determinate</code> element.
                    On the <code>.progress__bar</code> you can set the progress by defining the <code>width</code> in the <code>style</code> attribute.
                </p>
            </section>

            <section class="xs12 sm6">
                <div class="progress--determinate">
                    <div class="progress__bar" style="width:40%"></div>
                </div>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="indeterminate">Indeterminate</h2>

            <section class="xs12 sm6">
                <p>
                    For the indeterminate progress indicator all you have to do is wrap a 
                    <code>.progress__bar</code> element inside a <code>.progress--indeterminate</code> element.
                    The <code>.progress__bar</code> will than animate it self.
                </p>
            </section>

            <section class="xs12 sm6">
                <div class="progress--indeterminate">
                    <div class="progress__bar"></div>
                </div>
            </section>
        </article>
    </div>    
</template>
