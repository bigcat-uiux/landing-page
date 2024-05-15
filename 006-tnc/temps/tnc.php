<section class="tnc promo">
  <div class="inner">

    <h3 class="tnc__head promo__head" data-txt="promos"></h3>

    <div class="promo__content">

      <?php
      if ($_SERVER['QUERY_STRING'] === "lang=cn" || $_SERVER['QUERY_STRING'] === "lang=my") {
        $tncData = "
        <li> 活动期间：2024年3月4日至5月31日，期间内新注册的明陞M88玩家。 </li>
        <li> 活动期间所有新注册会员，可享有免费投注礼金。 </li>
        <li> 本活动限量前1000位新注册玩家获得28马币免费投注。 </li>
        <li> 免费投注奖金只能在电竞比赛中使用。 </li>
        <li> 奖金仅可用于电竞产品中的平博电竞、沙巴电竞和雷火电竞中，系统才可认列流水计算（8倍流水）。
        列如：
        免费投注奖金：28马币
        流水要求 = 免费投注 78 马币 x 8 倍 = 224马币
        </li>
        <li> 玩家必须在14天内达成指定投注额，逾期系统自动取消奖金与盈利。 </li>
        <li> 提款前，玩家必须在活动期间内存入最低存款30马币并且达成1倍流水。 </li>
        <li> 若会员账号余额低于1马币，系统将清除未完成的有效投注。 </li>
        <li> 所有平局/退款/拒绝/无效/取消的投注，以及任何低于1.50（欧洲盘）赔率的投注（马来盘赔率0.50；香港盘赔率0.50；印尼盘赔率-2.00）等将不计算在有效投注内。 </li>
        <li> 每位玩家仅允许一组帐号，若系统判定为多组帐号玩家，将自动取消玩家资格。 </li>
        <li> 本次活动只适用于「马币」帐户之会员玩家。 </li>
        <li> 如果您的账户仍有未完成的有效流水要求，您将无法提款。请联系在线客服办理撤除/取消/豁免流水要求即可。 </li>
        <li> 本活动不能与明陞M88其他活动同时进行，除非特殊活动加注说明。 </li>
        <li> 注册M88明陞的参赛者必须年满18岁以上。 明陞M88保留随时更改、更新、修改或取消此促销活动的权利 </li>
        <li> 一般条款及规则应用于此优惠。 </li>
          ";
      }
      if ($_SERVER['QUERY_STRING'] === "lang=en" || $_SERVER['QUERY_STRING'] === "") {
        $tncData = "
        <li> The promotion starts on 4 March 2024 at 00:00 (GMT+8) untill 31 May 2024 at 23:59 (GMT+8). </li>
        <li> The Free bet is available to all new registrations during the promotion period. </li>
        <li> First 1,000 sign-ups will receive a $5 free bet. </li>
        <li> Members can only use their Free bet Bonus on Esports Matches. </li>
        <li> The bonus amount must be rolled over with 8x RO in Pinnacle Esports, SABA, Esports, and TF Gaming product.
        Example: 
        Bonus freebet : $5 
        Rollover Requirement = Bonus freebet $5 x 8 RO = $40
        </li>
        <li> The bonus rollover must be fulfilled withing 14 days during the promotion period, otherwise, bonus and winning amount will be forfeited. </li>
        <li> In order to withdraw the winnings, members must make a minimum deposit and must be rolled over 1x during the promo duration only. </li>
        <li> The rollover requirement will be met if the qualified member's account balance is USD 1 or less. </li>
        <li> (Esports) All tie/draw/refund/declined/void/cancelled bets, and bets at decimal odds below 1.50 (Malay odds 0.50; HK odds 0.50; Indo Odds -2.00) will be not included in the calculation for Rollover requirement. </li>
        <li> Multiple accounts will not be considered. Bonus only can be claimed 1x during promo period </li>
        <li> This promo is exclusive to Mansion M88 real money players who are using MYR 30 / IDR 50/ THB 100 / VND 200 / CNY 100 / KRW 10,000 / INR 200 / USD 10 as their preferred currency. </li>
        <li> Withdrawal will not be processed if you still have an active rollover. Please contact Customer Service to arrange for a waiver of the rollover requirement. </li>
        <li> The bonus cannot be used in conjunction with other M88 Mansion promotions. </li>
        <li> Entrants must be aged 18+ to register with M88 Mansion. M88 Mansion reserves the right to change, update, modify or cancel this promotion anytime. </li>
        <li> General Terms & Conditions of Promotions apply </li>
        ";
      }
      if ($_SERVER['QUERY_STRING'] === "lang=id") {
        $tncData = "<li> Promosi dimulai pada 4 Maret 2024 pukul 00:00 (GMT+8) dan berakhir pada 31 Mei 2024 pukul 23:59 (GMT+8). </li>
        <li> Freebet tersedia untuk semua pendaftaran baru selama periode promosi. </li>
        <li> 1,000 pendaftar pertama akan menerima Freebet $5 </li>
        <li> Member hanya dapat menggunakan Bonus Freebet pada Pertandingan Esports.  </li>
        <li> Jumlah bonus harus melalui 8x RO di produk Pinnacle Esports, SABA, Esports, dan TF Gaming.
        Contoh:
        Bonus Freebet: $5
        Persyaratan Putaran = Bonus freebet $5x 8 RO = $40
        </li>
        <li> Bonus rollover harus dipenuhi dalam waktu 14 hari selama periode promosi, jika tidak, bonus dan jumlah kemenangan akan hangus. </li>
        <li> Untuk mencairkan kemenangan, member harus melakukan deposit minimal dan harus roll over 1x selama durasi promo saja. </li>
        <li> Persyaratan Rollover akan terpenuhi jika saldo akun anggota yang memenuhi syarat adalah USD 1. </li>
        <li> (Esports) Semua taruhan seri/seri/pengembalian dana/ditolak/dibatalkan/dibatalkan, dan taruhan dengan odds desimal di bawah 1,50 (Odds Malay 0,50; HK odds 0,50; Indo Odds -2.00) tidak akan dimasukkan dalam perhitungan untuk persyaratan Rollover. </li>
        <li> Jika terdapat memiliki banyak akun, maka dianggap hangus. </li>
        <li> Promo ini eksklusif untuk pemain Mansion M88 yang menggunakanuang tunai  MYR 30 / IDR 50/ THB 100 / VND 200 / CNY 100 / KRW 10,000 / INR 200 / USD 10 sebagai mata uang pilihan mereka. </li>
        <li> Penarikan tidak akan diproses jika Anda masih memiliki rollover aktif. Silakan hubungi Layanan Pelanggan (CS) untuk mengatur pengabaian persyaratan rollover. </li>
        <li> Bonus tidak dapat digunakan bersamaan dengan promosi M88 Mansion lainnya. </li>
        <li> Peserta harus berusia 18+ untuk mendaftar di M88 Mansion. M88 Mansion berhak mengubah, memperbarui, memodifikasi atau membatalkan promosi ini kapan saja. </li>
        <li> Syarat & Ketentuan Umum Promosi berlaku </li>";
      }
      if ($_SERVER['QUERY_STRING'] === "lang=th") {
        $tncData = "<li> โปรโมชั่นนี้เริ่มตั้งแต่วันที่ 4 มีนาคม 2024 เวลา 00:00 น. (GMT+8) จนถึง 31 พฤษภาคม 2024 เวลา 23:59 น. (GMT+8) </li>
        <li> ฟรีเบทมีให้สำหรับสมาชิกใหม่ที่ลงทะเบียนในช่วงระยะเวลาโปรโมชั่นเท่านั้น </li>
        <li> สมาชิกที่ลงทะเบียน 1,000 ท่านแรก จะได้รับฟรีเบท 178 บาท  </li>
        <li> สมาชิกสามารถใช้โบนัสฟรีเบทในแมตช์การแข่งขันอีสปอร์ตเท่านั้น </li>
        <li> จำนวนโบนัสจะต้องทำยอดเดิมพันหมุนเวียน 8 เท่า ในผลิตภัณฑ์ Pinnacle Esports, SABA, Esports และ TF Gaming
        ตัวอย่าง:
        โบนัสฟรีเบท :178 บาท
        ยอดเดิมพันหมุนเวียน= โบนัสฟรีเบท 178 บาท x 8 เท่า= 1,424 บาท
        </li>
        <li> โบนัสจะต้องทำยอดเดิมพันหมุนเวียนภายใน 14 วันเพื่อป้องกันการริบโบนัสและจำนวนเงินที่ชนะ </li>
        <li> ในการถอนเงินรางวัล สมาชิกจะต้องทำการฝากเงินขั้นต่ำ และจะต้องทำยอดเดิมพันหมุนเวียน 1 เท่าในช่วงระยะเวลาโปรโมชั่นเท่านั้น </li>
        <li> โบนัสจะถูกแลกโดยอัตโนมัติหากยอดคงเหลือต่ำกว่า 1 บาท </li>
        <li> (อีสปอร์ต) การเดิมพัน/เสมอ/ขอคืนเงิน/ปฏิเสธ/โมฆะ/ยกเลิก และเดิมพันราคาน้ำเดซิมอลต่ำกว่า 1.50 (ราคาน้ำมาเลย์ 0.50 ราคาน้ำฮ่องกง 0.50 ราคาน้ำอินโด -2.00) ราคาน้ำเหล่านี้จะไม่รวมอยู่ในการคำนวณ สำหรับข้อกำหนดการเดิมพันหมุนเวียน </li>
        <li> หากมีหลายบัญชีจะถูกจำกัดสิทธิ์ โดยโบนัสสามารถรับได้เพียง 1 ครั้งในช่วงระยะเวลาโปรโมชั่น </li>
        <li> โปรโมชั่นนี้มีไว้สำหรับผู้เล่นที่ใช้เงินจริงสกุลเงินบาทของ  M88 Mansion 100 บาท </li>
        <li> จะไม่สามารถดำเนินการถอนเงินได้ หากยอดหมุนเวียนยังไม่ผ่านเงื่อนไขที่กำหนดสมาชิกสามารถติดต่อฝ่ายประชาสัมพันธ์ลูกค้า เพื่อแจ้งดำเนินการยกเลิกยอดหมุนเวียนเดิมพันที่กำหนดได้ </li>
        <li> โบนัสนี้ไม่สามารถใช้ร่วมกับโปรโมชั่นและโบนัสอื่นๆ ของ M88 Mansion ได้ </li>
        <li> ผู้มีสิทธิลงทะเบียนกับ M88 Mansion จะต้องมีอายุ 18 ปี ขึ้นไป.  M88 Mansion ขอสงวนสิทธิ์ในการเปลี่ยนแปลงปรับปรุงแก้ไข หรือยกเลิกโปรโมชั่นนี้ได้ตลอดเวลา </li>
        <li> ข้อตกลงทั่วไปและเงื่อนไขการใช้งานโปรโมชั่น </li>";
      }
      if ($_SERVER['QUERY_STRING'] === "lang=vn") {
        $tncData = "<li> Khuyến mãi có hiệu lực từ ngày 04/03/2024 lúc 00:00 (GMT+8) đến 31/05/2024 lúc 23:59 (GMT+8). </li>
        <li> Tất cả thành viên đăng ký trong thời gian diễn ra khuyến mãi hợp lệ nhận Freebet </li>
        <li> 1000 thành viên đăng ký đầu tiền sẽ nhận 120 VND free bet.  </li>
        <li> Thưởng Freebet chỉ áp dụng vào các trận đấu Thể thao Điện tử.  </li>
        <li> Tiền thưởng cần trải qua 8x vòng cược tại Pinnacle, SABA, thể thao điện tử, và TF Gaming. 
        Ví dụ: 
        Thưởng Freebet: 120VND 
        Doanh thu vòng cược: Thưởng Freebet 120 VND x 8 vòng cược = 960 VND
        </li>
        <li> Tiền thưởng cần hoàn tất vòng cược trong vòng 14 ngày diễn ra khuyến mãi, để tránh bị thu hồi tiền thưởng và tiền thắng cược. </li>
        <li> Thành viên cần có khoản gửi tiền tối thiểu và cần trải qua 1x vòng cược trong thời gian diễn ra khuyến mãi để yêu cầu rút tiền thắng. </li> 
        <li> Các yêu cầu tái đặt cược theo quy định sẽ được loại bỏ trong trường hợp tài khoản của Quý khách có số dư dưới hoặc bằng 1 VND.  </li>
        <li> (Thể thao điện tử) Tất cả cược hòa/từ chối /vô hiệu/bị hủy và loại cược DEC có tỷ lệ dưới 1.50 (Malay tỷ lệ 0.50; HK tỷ lệ 0.50; Indo tỷ lệ -2.00) sẽ không tính vào doanh thu và/hoặc tiền tái đặt cược. </li>
        <li> Thành viên có nhiều tài khoản sẽ không được tính.  </li>
        <li> Khuyến mãi dành riêng cho thành viên M88 Mansion dùng tiền tệ 200 VND và cược tiền thật.  </li>
        <li> Thành viên không thể rút tiền nếu chưa hoàn tất yêu cầu vòng cược. Vui lòng liên hệ bộ phận Chăm sóc Khách Hàng để được hỗ trợ.
        <li> Khuyến mãi này không được kết hợp với các khuyến mãi khác trên trang M88 Mansion. </li>
        <li> Người chơi phải từ 18 tuổi trở lên để được đăng ký tài khoản M88 Mansion.  M88 Mansion có quyền thay đổi, cập nhật, điều chỉnh hoặc hủy khuyến mãi bất cứ lúc nào. </li>
        <li> Các quy định chung của chương trình khuyến mãi được áp dụng. </li>";
      }
      ?>

      <ol>
        <?php echo $tncData; ?>
      </ol>
    </div>


    <!-- <ol class="tnc__content">
    <li data-txt="tnc-li1"></li>
    <li data-txt="tnc-li2"></li>
    <li data-txt="tnc-li3"></li>
    <li data-txt="tnc-li4"></li>
    <li data-txt="tnc-li5"></li>
    <li data-txt="tnc-li6"></li>
    <li data-txt="tnc-li7"></li>
    <li data-txt="tnc-li8"></li>
    <li data-txt="tnc-li9"></li>
    <li data-txt="tnc-li10"></li>
    <li data-txt="tnc-li11"></li>
    <li data-txt="tnc-li12"></li>
    <li data-txt="tnc-li13"></li>
    <li data-txt="tnc-li14"></li>
    <li data-txt="tnc-li15"></li>
  </ol> -->

  </div>
</section>