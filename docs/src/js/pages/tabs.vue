<template>
    <div>
        <article class="row">
            <section class="xs12 sm6">
                <p>
                    There are a few variatens of tabs. You have fixed and scrollable tabs. 
                    But there are also text only tabs or text and icon tabs.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="tabs">Tabs text only</h2>

            <section class="xs12 sm6">
                <p>
                    For the filled text field all you need to do is use the 
                    classes <code>.text-field</code> and <code>.text-field--filled</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <div class="row">
                    <div class="xs12">
                        <div class="tabs tabs--text-only justify--start">
                            <a href="#/tabs" class="tabs__tab tabs__tab--active">
                                <span class="tabs__content">Example</span>
                            </a>
                            <a href="#/tabs" class="tabs__tab">
                                <span class="tabs__content">Example</span>
                            </a>
                            <a href="#/tabs" class="tabs__tab">
                                <span class="tabs__content">Example</span>
                            </a>
                        </div>    
                    </div>

                    <div class="xs12">
                        <div class="tabs tabs--icon-only justify--center">
                            <a href="#/tabs" class="tabs__tab tabs__tab--active">
                                <m-icon class="tabs__icon">person</m-icon>
                            </a>
                            <a href="#/tabs" class="tabs__tab">
                                <m-icon class="tabs__icon">person</m-icon>
                            </a>
                            <a href="#/tabs" class="tabs__tab">
                                <m-icon class="tabs__icon">person</m-icon>
                            </a>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="tabs tabs--icon-text justify--flex-end">
                            <a href="#/tabs" class="tabs__tab tabs__tab--active">
                                <m-icon class="tabs__icon">person</m-icon>
                                <span class="tabs__content">Person</span>
                            </a>
                            <a href="#/tabs" class="tabs__tab">
                                <m-icon class="tabs__icon">person</m-icon>
                                <span class="tabs__content">Person</span>
                            </a>
                            <a href="#/tabs" class="tabs__tab">
                                <m-icon class="tabs__icon">person</m-icon>
                                <span class="tabs__content">Person</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section> 
        </article>

        <article class="row">
            <h2 class="xs12" id="tabs">Tabs text only</h2>

            <section class="xs12 sm6">
                <p>
                    For the filled text field all you need to do is use the 
                    classes <code>.text-field</code> and <code>.text-field--filled</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <div class="row">
                    <div class="xs12">
                        <div class="tabs tabs--text-only tabs--scrollable">
                            <a href="#/tabs" class="tabs__tab tabs__tab--active">
                                <span class="tabs__content">Example</span>
                            </a>
                            <a href="#/tabs" class="tabs__tab" v-for="i in 10" :key="i">
                                <span class="tabs__content">Example</span>
                            </a>
                        </div>    
                    </div>

                    <div class="xs12">
                        <div class="tabs tabs--icon-only tabs--scrollable">
                            <a href="#/tabs" class="tabs__tab tabs__tab--active">
                                <m-icon class="tabs__icon">person</m-icon>
                            </a>
                            <a href="#/tabs" class="tabs__tab" v-for="i in 10" :key="i">
                                <m-icon class="tabs__icon">person</m-icon>
                            </a>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="tabs tabs--icon-text tabs--scrollable">
                            <a href="#/tabs" class="tabs__tab tabs__tab--active">
                                <m-icon class="tabs__icon">person</m-icon>
                                <span class="tabs__content">Person</span>
                            </a>
                            <a href="#/tabs" class="tabs__tab" v-for="i in 10" :key="i">
                                <m-icon class="tabs__icon">person</m-icon>
                                <span class="tabs__content">Person</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section> 
        </article>
    </div>    
</template>
