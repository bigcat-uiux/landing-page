<form id="minigameForm1" name="minigameForm1" class="minigame-form minigame-form--1" method="post">

  <?php
  /*
  * Display all errors if any.
  */
  if (isset($errors)) {
  ?>
    <div class="errors">
      <?php
      foreach ($errors as $error) {
      ?>
        <p style="color:#ff0000">
          <?php echo $error; ?>
        </p>
      <?php
      }
      ?>
    </div>
  <?php
  }
  ?>

  <div class="minigame-form__group minigame-form__group--1">

    <input name="minigameMg1" id="minigameMg1" value="TraditionalLanternFestivalRiddles" style="display:none">

    <div class="minigame-form__group__field">
      <label data-label="label-m88username">&nbsp;</label>
      <input type="text" id="m88usernameMg1" name="m88usernameMg1" value="" required data-placeholder="pholder-m88username">
    </div>
    <div class="minigame-form__group__field">
      <label data-label="label-answer1a">&nbsp;</label>
      <input type="text" id="answer1Mg1" name="answer1Mg1" value="" required data-placeholder="pholder-answer">
    </div>
    <div class="minigame-form__group__field">
      <label data-label="label-answer2a">&nbsp;</label>
      <input type="text" id="answer2Mg1" name="answer2Mg1" value="" required data-placeholder="pholder-answer">
    </div>
    <div class="minigame-form__group__field">
      <label data-label="label-answer3a">&nbsp;</label>
      <input type="text" id="answer3Mg1" name="answer3Mg1" value="" required data-placeholder="pholder-answer">
    </div>

  </div>

  <p class="participated"><span class="icn icn--success"></span> <span data-txt="participated">&nbsp;</span></p>

  <button id="submitMinigame1" name="submitMinigame1" data-txt="submit" class="btn btn--gold btn--submit deact" data-value="form-register">&nbsp;</button>

  <p class="submitting" data-txt="submitting">&nbsp;</p>

</form>