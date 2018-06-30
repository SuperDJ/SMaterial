<template>
    <div>
        <article class="row">
            <h1 class="xs12 text--red-400">Selection controls</h1>

            <section class="xs12 sm6">
                <p>
                    There are a couple types of selection controls that you can use. For now you can use the
                    <a href="#checkbox">checkbox</a>, <a href="#radio">radio</a> and <a href="#switch">switch</a> 
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="checkbox">Checkbox</h2>

            <section class="xs12 sm6">
                <p>
                    For the checkbox progress indicator all you have to do is use the checkbox input with the class
                    <code>.checkbox</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <label>
                    <input type="checkbox" class="checkbox">
                    Checkbox
                </label>
                <label>
                    <input type="checkbox" checked disabled class="checkbox">
                    Disabled checkbox
                </label>
                <label>
                    <input type="checkbox" disabled class="checkbox">
                    Disabled checkbox
                </label>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="radio">Radio buttons</h2>

            <section class="xs12 sm6">
                <p>
                    For a radio button all you need to do use the radio input with the class
                    <code>.radio</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <label>
                    <input type="radio" class="radio" name="t1">
                    Radio
                </label>
                <label>
                    <input type="radio" disabled checked class="radio" name="t1">
                    Disabled Radio
                </label>
                <label>
                    <input type="radio" disabled class="radio" name="t1">
                    Disabled Radio
                </label>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="switch">Swtich</h2>

            <section class="xs12 sm6">
                <p>
                    For a switch all you need to do use the checkbox input with the class
                    <code>.switch</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <label>
                    <input type="checkbox" class="switch">
                    Switch
                </label>
                <label>
                    <input type="checkbox" disabled checked  class="switch">
                    Disabled Switch
                </label>
                <label>
                    <input type="checkbox" disabled  class="switch">
                    Disabled Switch
                </label>
            </section>
        </article>
    </div>    
</template>
