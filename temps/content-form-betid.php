<form id="betIdForm" name="betIdForm" class="minigame-form minigame-form--betid act" method="post">

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

  <legend class="minigame-form__title">收件人资料</legend>

  <div class="minigame-form__group">

    <input name="betId" id="betId" value="CNYSubmissionForm" style="display:none">

    <div class="minigame-form__group__field">
      <label data-label="label-m88username">&nbsp;</label>
      <input type="text" id="m88username" name="m88username" value="" required data-placeholder="pholder-m88username-betid">
    </div>
        <div class="minigame-form__group__field">
      <label data-label="label-recipient-name">&nbsp;</label>
      <input type="text" id="recipient" name="recipient" value="" required data-placeholder="pholder-recipient-name">
    </div>
        <div class="minigame-form__group__field">
      <label data-label="label-contact">&nbsp;</label>
      <input type="text" id="contact" name="contact" title="please enter number only" value="" pattern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}" required="required" data-placeholder="pholder-contact">
    </div>
        <div class="minigame-form__group__field">
      <label data-label="label-address">&nbsp;</label>
      <input type="text" id="address" name="address" value="" required data-placeholder="pholder-address">
    </div>
    <div class="minigame-form__group__field">
      <label data-label="label-postal">&nbsp;</label>
      <input type="text" id="postal" name="postal" title="please enter number only" value="" pattern="[0-9]+" required="required" data-placeholder="pholder-postal">
      <!-- <label class="count-limit"><span class="count-limit__counter">0</span>/150</label> -->
    </div>

  </div>

  <p class="participated"><span class="icn icn--success"></span> <span data-txt="submitted">&nbsp;</span></p>

  <button type="submit" id="submitBetIdForm" name="submitBetIdForm" data-txt="submit" class="btn btn--gold btn--submit" data-value="form-register">&nbsp;</button>

  <p class="submitting" data-txt="submitting">&nbsp;</p>

</form>