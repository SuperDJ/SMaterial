<template>
    <div>
        <article class="row">
            <section class="xs12 sm6">
                <p>
                    The bottom nav has 2 varieties. 
                    The <a href="#default">default</a> bottom nav shows both text and an icon. The <a href="#icon">icon</a> modification however will only show an icon.
                    Once an navigation element is active it will show both the text and icon of that specific item.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="default">Default bottom navigation</h2>

            <section class="xs12 sm6">
                <p>
                    For the bottom navigation to work you need to start with an elment class 
                    <code>.botom-nav</code>. After that you need an container class <code>.bottom-nav__items</code>
                    which contains all the items. 
                    After that you can start adding the navigation items with class <code>.bottom-nav__item</code>.
                    Each item can contains an icon <code>.bottom_nav__item__icon</code> and text <code>.bottom-nav__item__text</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <nav class="bottom-nav">
                    <ul class="bottom-nav__items">
                        <li>
                            <a href="#" class="bottom-nav__item">
                                <m-icon class="bottom-nav__item__icon">person</m-icon>
                                <span class="bottom-nav__item__text">Persons</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="bottom-nav__item">
                                <m-icon class="bottom-nav__item__icon">person</m-icon>
                                <span class="bottom-nav__item__text">Persons</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="bottom-nav__item bottom-nav__item--active">
                                <m-icon class="bottom-nav__item__icon">person</m-icon>
                                <span class="bottom-nav__item__text">Active</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section> 
        </article>

        <article class="row">
            <h2 class="xs12" id="icon">Icon only bottom navigation</h2>

            <section class="xs12 sm6">
                <p>
                    If you prefer to only show the text when an item is active you can add the class <code>.bottom-nav---icon-only</code>
                    to the class <code>.bottom-nav</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <nav class="bottom-nav bottom-nav--icon-only">
                    <ul class="bottom-nav__items">
                        <li>
                            <a href="#" class="bottom-nav__item">
                                <m-icon class="bottom-nav__item__icon">person</m-icon>
                                <span class="bottom-nav__item__text">Persons</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="bottom-nav__item">
                                <m-icon class="bottom-nav__item__icon">person</m-icon>
                                <span class="bottom-nav__item__text">Persons</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="bottom-nav__item bottom-nav__item--active">
                                <m-icon class="bottom-nav__item__icon">person</m-icon>
                                <span class="bottom-nav__item__text">Active</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section> 
        </article>
    </div>    
</template>
