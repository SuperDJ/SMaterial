<template>
    <div>
        <article class="row">
            <section class="xs12">
                <h1 class="xs12 text--red-400">Lists</h1>

                <p>
                    The list elements can consits of a few elements. However the text are makes the biggest difference.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="structure">Structure</h2>

            <section class="xs12 sm6">
                <p>
                    The list item can consists out of the following elements: support, content and control.
                    The list also has a few modifiers which are described below.
                </p>
            </section>
        </article>
            
        <article class="row">
            <h2 class="xs12" id="single-line">Single line</h2>

            <section class="xs12 sm6">
                <ul class="list red">
                    <li class="list--single-line">
                        <span class="list__content">Single line item</span>
                    </li>
                    <li class="list--single-line">
                        <span class="list__content">Single line item</span>
                        <m-icon class="list__control">person</m-icon>
                    </li>
                    <li class="list--single-line list--support">
                        <m-icon class="list__support__icon">person</m-icon>
                        <span class="list__content">Singe line item</span>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                    <li class="list--single-line list--support">
                        <div class="list__support__image">
                            <img src="http://via.placeholder.com/40x40">
                        </div>
                        <span class="list__content">Singe line item</span>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                    <li class="list--single-line list--support--large">
                        <div class="list__support__image">
                            <img src="http://via.placeholder.com/56x56">
                        </div>
                        <span class="list__content">Singe line item</span>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                    <li class="list--single-line list--support--large">
                        <div class="list__support__image--large">
                            <img src="http://via.placeholder.com/100x56">
                        </div>
                        <span class="list__content">Singe line item</span>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                </ul>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="two-line">Two line</h2>

            <section class="xs12 sm6">
                <ul class="list red">
                    <li class="list--two-line">
                        <div class="list__content">
                            <span class="list__content__title">Two line item</span>
                            <span class="list__content__text">Secondary text</span>
                        </div>    
                    </li>
                    <li class="list--two-line">
                        <div class="list__content">
                            <span class="overline">Overline</span>
                            <span class="list__content__title">Secondary text</span>
                        </div>    
                    </li>
                </ul>
            </section>
        </article>
    </div>
</template>