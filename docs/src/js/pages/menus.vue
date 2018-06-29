<template>
    <div>
        <article class="row">
            <h1 class="xs12 text--red-400">Menu</h1>

            <section class="xs12 sm6">
                <p>
                    There are a couple types of FAB's that you can use. For now you can use the 
                    <a href="#fab">default</a>, <a href="#fab">mini</a> and <a href="#extended-fab">extended</a>.
                </p>

                <p>
                    Eacht FAB uses the <code>.fab</code> class but from there they are different.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="structure">Structure</h2>

            <section class="xs12 sm6">
                <p>
                    For the default FAB you don't need to use any additional classes.
                </p>

                <p>
                    For the mini FAB all you need to do is add an additional class <code>.fab--mini</code>
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="menu">Menu</h2>

            <section class="xs12 sm6">
                <ul class="menu">
                    <li class="menu__item">
                        <span class="menu__content">Menu item</span>
                    </li>
                    <li class="menu__item">
                        <m-icon class="menu__icon">cloud</m-icon>
                        <span class="menu__content">Menu item</span>
                    </li>
                    <li class="menu__divider"></li>
                    <li class="menu__item">
                        <a href="#">
                            <span class="menu__content">Menu item</span>
                        </a>
                    </li>
                    <li class="menu__item">
                        <a href="#"> 
                            <m-icon class="menu__icon">cloud</m-icon>
                            <span class="menu__content">Menu item</span>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    </div>    
</template>
