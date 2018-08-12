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
                <div class="progress progress--determinate">
                    <div class="progress__bar" style="width:40%"></div>
                </div>

<pre class="language-html">
    <code>
&lt;div class="progress progress--determinate">
    &lt;div class="progress__bar" style="width:40%">&lt;/div>
&lt;/div>

&lt;progress min="0" max="100" value="40" class="progress progress--determinate">
    &lt;div class="progress progress--determinate">
        &lt;div class="progress__bar" style="width:40%">&lt;/div>
    &lt;/div>
&lt;/progress>
    </code>
</pre>
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
                <div class="progress progress--indeterminate">
                    <div class="progress__bar"></div>
                </div>

<pre class="language-html"> 
    <code>
&lt;div class="progress progress--indeterminate">
    &lt;div class="progress__bar" style="width:40%">&lt;/div>
&lt;/div>

&lt;progress min="0" max="100" value="40" class="progress progress--indeterminate">
    &lt;div class="progress progress--indeterminate">
        &lt;div class="progress__bar" style="width:40%">&lt;/div>
    &lt;/div>
&lt;/progress>
    </code>
</pre>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12">Support</h2>

            <div class="xs12">
                <table class="data-table data-table--hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Chrome</th>
                            <th>Firefox</th>
                            <th>Edge</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>.progress.progress--determinate</td>
                            <td><m-icon class="text--green">check</m-icon></td>
                            <td><m-icon class="text--green">check</m-icon></td>
                            <td><m-icon class="text--green">check</m-icon></td>
                        </tr>
                        <tr>
                            <td>progress.progress.progress--determinate</td>
                            <td><m-icon class="text--green">check</m-icon></td>
                            <td><m-icon class="text--red">clear</m-icon></td>
                            <td><m-icon class="text--red">clear</m-icon></td>
                        </tr>
                        <tr>
                            <td>.progress.progress--indeterminate</td>
                            <td><m-icon class="text--green">check</m-icon></td>
                            <td><m-icon class="text--green">check</m-icon></td>
                            <td><m-icon class="text--green">check</m-icon></td> 
                        </tr>
                        <tr>
                            <td>progress.progress.progress--indeterminate</td>
                            <td><m-icon class="text--red">clear</m-icon></td>
                            <td><m-icon class="text--red">clear</m-icon></td>
                            <td><m-icon class="text--red">clear</m-icon></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </div>    
</template>
