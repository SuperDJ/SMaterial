<template>
    <div>
        <article class="row">
            <section class="xs12 sm6">
                <p>
                    The list elements can consits of a few elements. However the textarea makes the biggest difference.
                </p>

                <p>
                    The list elements has three different styles that you can use. The styles that you can use are:
                    <a href="#single-line">single line</a>, <a href="#two-line">two line</a> and <a href="#three-line">three line</a>.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="single-line">Single line</h2>

            <section class="xs12 sm6">
                <p>
                    For the the list you need an element with the class <code>.list</code>.
                    Now you can specify the type of line for each child element.
                    For the single line this would mean class <code>.list--single-line</code>
                </p>

                <p>
                    The content of a list item needs the class <code>.list__content</code>.
                </p>

                <p>
                    If you would like to add a support icon or image you also need to give the list item the class <code>.list--support</code>.
                    For the larger support image you need to use class <code>.list--support--large</code> instead.
                    The image/ icon it self need to get the class <code>list__support__icon</code>
                </p>

                <p>
                    For a control element like the "more vertical" in the examples you need to use the class <code>.list__control</code> on the control element.
                </p>
            </section>

            <section class="xs12 sm6">
                <ul class="list">
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
                            <img src="//via.placeholder.com/40x40">
                        </div>
                        <span class="list__content">Singe line item</span>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                    <li class="list--single-line list--support--large">
                        <div class="list__support__image">
                            <img src="//via.placeholder.com/56x56">
                        </div>
                        <span class="list__content">Singe line item</span>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                    <li class="list--single-line list--support--large">
                        <div class="list__support__image--large">
                            <img src="//via.placeholder.com/100x56">
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
                <p>
                    For the two line list items you need to use the class <code>.list--tow-line</code>.
                    The content of the list item changes a bit as well.
                    You can now add two extra elements. These elements are <code>.list__content__title</code> and <code>.list__content__text</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <ul class="list">
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
                    <li class="list--two-line list--support">
                        <m-icon class="list__support__icon">person</m-icon>
                        <div class="list__content">
                            <span class="list__content__title">Two line item</span>
                            <span class="list__content__text">Secondary text</span>
                        </div>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                    <li class="list--two-line list--support">
                        <div class="list__support__image">
                            <img src="//via.placeholder.com/40x40">
                        </div>
                        <div class="list__content">
                            <span class="list__content__title">Two line item</span>
                            <span class="list__content__text">Secondary text</span>
                        </div>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                    <li class="list--two-line list--support">
                        <div class="list__support__image">
                            <img src="//via.placeholder.com/40x40" class="shape--circle">
                        </div>
                        <div class="list__content">
                            <span class="list__content__title">Two line item</span>
                            <span class="list__content__text">Secondary text</span>
                        </div>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                     <li class="list--two-line list--support">
                        <div class="list__support__image--large">
                            <img src="//via.placeholder.com/100x56">
                        </div>
                        <div class="list__content">
                            <span class="list__content__title">Two line item</span>
                            <span class="list__content__text">Secondary text</span>
                        </div>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                </ul>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="three-line">Three line</h2>

            <section class="xs12 sm6">

            </section>

            <section class="xs12 sm6">
                <ul class="list">
                    <li class="list--three-line">
                        <div class="list__content">
                            <span class="list__content__title">Three line item</span>
                            <span class="list__content__text">Secondary text Lorem ipsum dolor sit<br>amet, consectetu adipiscing elit.</span>
                        </div>
                    </li>
                    <li class="list--three-line">
                        <div class="list__content">
                            <span class="overline">Overline</span>
                            <span class="list__content__title">Three line item</span>
                            <span class="list__content__text">Secondary text Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                    <li class="list--three-line list--support">
                        <m-icon class="list__support__icon">person</m-icon>
                        <div class="list__content">
                            <span class="list__content__title">Three line item</span>
                            <span class="list__content__text">Secondary text Lorem ipsum dolor sit<br>amet, consectetu adipiscing elit.</span>
                        </div>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                    <li class="list--three-line list--support">
                        <div class="list__support__image">
                            <img src="//via.placeholder.com/40x40">
                        </div>
                        <div class="list__content">
                            <span class="list__content__title">Three line item</span>
                            <span class="list__content__text">Secondary text Lorem ipsum dolor sit<br>amet, consectetu.</span>
                        </div>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                    <li class="list--three-line list--support">
                        <div class="list__support__image">
                            <img src="//via.placeholder.com/40x40" class="shape--circle">
                        </div>
                        <div class="list__content">
                            <span class="list__content__title">Three line item</span>
                            <span class="list__content__text">Secondary text Lorem ipsum dolor sit<br>amet, consectetu.</span>
                        </div>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                     <li class="list--three-line list--support">
                        <div class="list__support__image--large">
                            <img src="//via.placeholder.com/100x56">
                        </div>
                        <div class="list__content">
                            <span class="list__content__title">Two line item</span>
                            <span class="list__content__text">Secondary text Lorem ipsum dolor sit<br>amet, consectetu.</span>
                        </div>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                </ul>
            </section>
        </article>
    </div>
</template>