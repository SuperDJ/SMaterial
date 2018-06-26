<template>
    <div>
        <article class="row">
            <section class="xs12">
                <h1 class="xs12 text--red-400">FAB</h1>

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
            <h2 class="xs12" id="fab">FAB</h2>

            <section class="xs12 sm6">
                <p>
                    For the default FAB you don't need to use any additional classes.
                </p>

                <p>
                    For the mini FAB all you need to do is add an additional class <code>.fab--mini</code>
                </p>
            </section>

            <section class="xs12 sm6">
                <button class="fab">
                    <i class="material-icons icon">person</i>
                </button>

                <button class="fab fab--mini">
                    <i class="material-icons icon">person</i>
                </button>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="extended-fab">Extended FAB</h2>

            <section class="xs12 sm6">
                <p>
                    For the extended fab you can add the class <code>.fab__extended</code>.
                    When adding in an icon you can change the style depending on the position of the icon by using one of the follow classes:
                    <code>.fab__extended--icon-left</code> or <code>.fab__extended--icon-right</code>
                </p>
            </section>

            <section class="xs12 sm6">
                <button class="fab fab__extended">
                    Extended fab
                </button>

                <button class="fab fab__extended fab__extended--icon-left">
                    <i class="material-icons icon">person</i>
                    Person
                </button>

                <button class="fab fab__extended fab__extended--icon-right">
                    Person
                    <i class="material-icons icon">person</i>
                </button>
            </section>
        </article>
    </div>    
</template>
