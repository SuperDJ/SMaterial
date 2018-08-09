<template>
    <div>
        <article class="row">
            <section class="xs12 sm6">
                <p>
                    The text field comes in two varieties
                    <a href="#filled">filled</a> and <a href="#outlined">outlined</a>.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="filled">Filled text field</h2>

            <section class="xs12 sm6">
                <p>
                    For the filled text field all you need to do is use the 
                    classes <code>.text-field</code> and <code>.text-field--filled</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <div class="row">
                    <div class="xs12">
                        <div class="text-field text-field--filled">
                            <input type="text" id="text-filled" class="text-field__input">
                            <label class="text-field__label" for="text-filled">Label</label>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="text-field text-field--filled">
                            <textarea id="textarea-filled" class="text-field__input"></textarea>
                            <label class="text-field__label" for="textarea-filled">Label</label>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="text-field text-field--filled">
                            <input type="date" id="date-filled" class="text-field__input">
                            <label class="text-field__label" for="date-filled">Label</label>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="text-field text-field--filled">
                            <input type="number" id="number-filled" class="text-field__input">
                            <label class="text-field__label" for="number-filled">Label</label>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="text-field text-field--filled">
                            <input type="text" id="disabled-filled" class="text-field__input" disabled>
                            <label class="text-field__label" for="disabled-filled">Label</label>
                        </div>
                    </div>
                </div>
            </section> 
        </article>

        <article class="row">
            <h2 class="xs12" id="outlined">Outlined text field</h2>

            <section class="xs12 sm6">
                 <p>
                    For the outlined text field all you need to do is use the 
                    classes <code>.text-field</code> and <code>.text-field--outlined</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                 <div class="row">
                    <div class="xs12">
                        <div class="text-field text-field--outlined">
                            <input type="text" id="text-outlined" class="text-field__input">
                            <label class="text-field__label" for="text-outlined">Label</label>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="text-field text-field--outlined">
                            <textarea id="textarea-outlined" class="text-field__input"></textarea>
                            <label class="text-field__label" for="textarea-outlined">Label</label>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="text-field text-field--outlined">
                            <input type="date" id="date-outlined" class="text-field__input">
                            <label class="text-field__label" for="date-outlined">Label</label>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="text-field text-field--outlined">
                            <input type="number" id="number-outlined" class="text-field__input">
                            <label class="text-field__label" for="number-outlined">Label</label>
                        </div>
                    </div>

                    <div class="xs12">
                        <div class="text-field text-field--outlined">
                            <input type="text" id="disabled-outlined" class="text-field__input" disabled>
                            <label class="text-field__label" for="disabled-outlined">Label</label>
                        </div>
                    </div>
                </div>
            </section> 
        </article> 
    </div>    
</template>
