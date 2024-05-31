<form id="minigameForm2" name="minigameForm2" class="minigame-form minigame-form--2" method="post">

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

  <div class="minigame-form__group  minigame-form__group--2">

    <input name="minigameMg2" id="minigameMg2" value="FindLanternRabbit" style="display:none">

    <div class="minigame-form__group__field">
      <label data-label="label-m88username">&nbsp;</label>
      <input type="text" id="m88usernameMg2" name="m88usernameMg2" value="" required data-placeholder="pholder-m88username">
    </div>
    <div class="minigame-form__group__field">
      <label data-label="label-answer1b">&nbsp;</label>
      <input type="text" id="answer1Mg2" name="answer1Mg2" value="" required data-placeholder="pholder-answer">
    </div>
    <div class="minigame-form__group__field">
      <label data-label="label-answer2b">&nbsp;</label>
      <input type="text" id="answer2Mg2" name="answer2Mg2" value="" required data-placeholder="pholder-answer">
    </div>

  </div>

  <p class="participated"><span class="icn icn--success"></span> <span data-txt="participated">&nbsp;</span></p>

  <button type="submit" id="submitMinigame2" name="submitMinigame2" data-txt="submit" class="btn btn--gold btn--submit deact" data-value="form-register">&nbsp;</button>

  <p class="submitting" data-txt="submitting">&nbsp;</p>

</form>