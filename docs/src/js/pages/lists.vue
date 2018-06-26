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
            <h2 class="xs12" id="font">Structure</h2>

            <section class="xs12 sm6">
                <p>
                    The list item can consists out of the following elements:
                    a support image or icon, a single, multi or three line textarea and a support element.
                    The list is made to be used <code>ul</code>, <code>li</code> tags. However the list also works with any other tag. 
                </p>
            </section>
            
            <section class="xs12 sm6">
                <ul class="list red">
                    <li class="list__item list--single-line">
                        <span class="list__text">Single line item</span>
                    </li>
                    <li class="list__item list--single-line">
                        <span class="list__text">Single line item</span>
                        <m-icon class="list__control">person</m-icon>
                    </li>
                    <li class="list__item list--single-line list--single-line--support-icon">
                        <m-icon class="list__support">person</m-icon>
                        <span class="list__text">Singe line item</span>
                        <m-icon class="list__control">more_vert</m-icon>
                    </li>
                </ul>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12">Type scale</h2>

            <section class="xs12 sm6">
            </section>
        </article>
    </div>
</template>