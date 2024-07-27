import React from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';

export default function Service() {
  const router = useRouter();

  return (
    <Wrapper
      isFloatingButton
      titleElement={<div className='text-center'>개인정보 수집 및 이용약관</div>}
      formElement={
        <div className='text-sm'>
           제1조(목적)

          <br></br><br></br>이 약관은 ㈜젤리레터(이하 “서비스”라 합니다)가 제공하는 서비스 이용과 관련하여 회사와 이용자간의 권리·의무 및 기타 필요한 제반사항을 정함을 목적으로 합니다.
          <br></br>
          <br></br> 제2조(용어의 정의)
          <br></br>
          <br></br>이 약관에서 사용하는 용어의 정의는 다음 각호와 같으며, 정의하지 않은 용어의 해석은 관련 법령 및 상관례에 따릅니다.
          <br></br>
          <br></br>1. “이용고객”이란 회사가 제공하는 서비스를 이용하기 위해 앱스토어사업자 또는 플랫폼사업자가 운영하는 앱스토어마켓에서 애플리케이션을 다운로드 받은 자를 말합니다.
          <br></br>2. “이용자”란 이 약관 및 개인정보처리방침에 동의하고 회사가 제공하는 서비스 이용자격을 부여 받은 이용고객을 말합니다.
          <br></br>3. “서비스”란 회사가 제공하는 게임 서비스 일체를 의미합니다.
          <br></br>4. “단말기”란 서비스를 이용할 수 있는 휴대폰, 스마트폰, PDA, 태블릿, 휴대용 게임기 등 유·무선 기기를 말합니다.
          <br></br>5. “이용자 계정”이란 이용자의 식별과 서비스 이용을 위하여 이용자가 선정하고 앱스토어사업자 또는 플랫폼사업자가 부여하는 문자, 숫자 또는 특수문자의 조합을 의미합니다.
          <br></br>
          <br></br> 제3조(회사정보 등의 제공)
          <br></br>
          <br></br>회사는 다음 각호의 사항을 회사의 웹사이트에 게시하거나 애플리케이션내의 연결화면을 통해 이용자가 이를 쉽게 알 수 있도록 합니다. 다만, 이 약관 및 개인정보처리방침은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
          <br></br>
          <br></br>1. 상호 및 대표자의 성명
          <br></br>2. 영업소 소재지 주소(이용자의 불만을 처리할 수 있는 곳의 주소를 포함한다) 및 전자우편주소
          <br></br>3. 전화번호
          <br></br>4. 사업자등록번호, 통신판매업 신고번호
          <br></br>5. 개인정보처리방침
          <br></br>6. 서비스이용약관
          <br></br>
          <br></br> 제4조(약관의 효력 및 변경)
          <br></br>
          <br></br>① 회사는 이 약관을 이용자가 알 수 있도록 회사의 웹사이트에 게시하거나 애플리케이션 내의 연결화면 등을 통해 이용자에게 공지함으로써 효력이 발생합니다.
          <br></br>
          <br></br>② 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「게임산업진흥에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」 등 관련 법령에 위배되지 않는 범위에서 이 약관을 변경할 수 있습니다. 변경되는 약관은 적용일자, 변경내용 및 변경사유 등을 명시하여 그 적용일 7일 이전부터 그 적용일자 경과 후 일정기간이 경과할 때까지 회사 웹사이트나 서비스 공식 블로그 또는 애플리케이션의 Push 알림 등을 통해 이용자에게 공지합니다. 다만, 이용자의 권리·의무에 중대한 영향을 미치는 사항에 대해서는 그 적용일 30일 이전부터 공지합니다.
          <br></br>
          <br></br>③ 이용자는 변경되는 약관에 대해 동의하지 않을 수 있으며, 변경되는 약관에 동의하지 않는 경우에는 서비스 이용을 중단하고 서비스에서 탈퇴를 할 수 있습니다. 다만, 제2항의 방법으로 변경되는 약관 공지 시 이용자가 별도의 의사표시를 하지 않으면 승낙한 것으로 본다고 공지하였음에도 불구하고, 변경되는 약관의 적용일 전일까지 회사에 대해 명시적으로 의사표시를 하지 아니하는 경우 또는 이용자가 변경되는 약관 적용일 이후에도 서비스를 계속 이용하는 경우에는 변경된 약관에 동의한 것으로 봅니다.
          <br></br>
          <br></br> 제5조(약관 외 준칙)
          <br></br>
          <br></br>이 약관에서 정하지 아니한 사항에 관하여는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」 등 관련 법령 및 상관례에 따릅니다.
          <br></br>
          <br></br> 제6조(이용 계약의 성립)
          <br></br>
          <br></br>① 서비스 이용계약은 “이용고객”이 애플리케이션을 설치 및 구동하여 이 약관 및 개인정보처리방침에 동의하면 그 이용신청에 대한 회사의 이용승낙으로 성립합니다. 이용고객의 서비스 이용신청 완료 후 단말기내에서 애플리케이션이 정상적으로 구동되는 경우에는 서비스 이용이 승낙된 것으로 간주됩니다.
          <br></br>
          <br></br>② 이용자는 서비스 이용과정에서 타인의 개인정보를 도용하는 경우 이 약관에 의한 이용자의 권리를 주장할 수 없으며, 회사는 이용계약을 취소하거나 해지할 수 있습니다. 이용자가 플랫폼사업자에게 개인정보를 제공하고 플랫폼사업자를 통해 서비스를 이용하는 경우에도 동일하게 간주됩니다.
          <br></br>
          <br></br>③ 회사는 다음 각호의 어느 하나에 해당하는 이용신청에 대해서는 승낙을 하지 않을 수 있습니다.
          <br></br>
          <br></br>1. 콘텐츠 구매 대금을 납부하지 않거나 잘못 납부하여 확인할 수 없는 경우
          <br></br>2. 청소년이 법정대리인의 동의를 얻지 아니하거나 동의를 얻었음을 확인할 수 없는 경우
          <br></br>3. 최근 3개월 내 이용제한 기록 있거나, 서비스 운영정책에 따라 서비스 이용제한(영구제한)을 받은 이용자가 이용신청을 하는 경우
          <br></br>4. 대한민국 이외의 국가 중 회사에서 아직 서비스를 제공할 것으로 결정하지 않은 국가에서 서비스를 이용하는 경우로, 회사가 해외 서비스 업체와 체결한 계약이나 특정 국가에서 접속하는 회원에 대한 서비스 제공과 관련하여 서비스 제공을 제한할 필요가 있는 경우
          <br></br>5. 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및 그 밖의 관계 법령에서 금지하는 위법행위를 할 목적으로 이용신청을 하는 경우
          <br></br>6. 그 밖에 제1호 내지 제5호에 준하는 사유로서 승낙이 부적절하다고 판단되는 경우
          <br></br>
          <br></br> 제7조(이용자 계정 관리)
          <br></br>
          <br></br>① 회사는 이용자 계정을 통하여 이용자의 서비스 이용 가능 여부 등 제반 이용자 관리업무를 수행합니다.
          <br></br>
          <br></br>② 이용자는 자신의 이용자 계정을 선량한 관리자로서의 주의 의무를 다하여 관리하여야 합니다. 회사는 이용자가 자신의 이용자 계정을 소홀히 관리하거나 제3자에게 이용을 승낙함으로써 발생하는 손해에 대해 어떠한 책임도 부담하지 않습니다.
          <br></br>
          <br></br> 제8조(개인정보의 보호 및 관리)
          <br></br>
          <br></br>① 회사는 관련 법령이 정하는 바에 따라 이용자 계정을 포함한 이용자의 개인정보를 보호하기 위해 노력합니다. 이용자의 개인정보 보호 및 이용에 대해서는 관련 법령 및 회사가 별도로 정하여 고지한 개인정보처리방침에 따릅니다.
          <br></br>
          <br></br>② 회사의 웹사이트 또는 서비스에서 단순히 링크된 제3자 제공의 서비스 또는 광고에 대하여는 회사의 개인정보처리방침이 적용되지 않습니다.
          <br></br>
          <br></br>③ 회사는 이용자의 귀책사유로 인하여 노출된 이용자 계정을 포함한 이용자의 개인정보에 대해서는 일체의 책임을 지지 않습니다.
          <br></br>
          <br></br> 제9조(회사의 의무)
          <br></br>
          <br></br>① 회사는 관련 법령을 준수하고, 이 약관이 정하는 권리의 행사와 의무의 이행을 신의에 따라 성실하게 이행합니다.
          <br></br>
          <br></br>② 회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고, 객관적으로 인정될 경우에는 합리적인 기간내에 신속하게 처리합니다. 다만, 처리에 장기간이 소요되는 경우에는 이용자에게 그 사유와 처리일정을 별도로 고지 합니다.
          <br></br>
          <br></br>③ 회사는 서비스에 장애가 발생하는 경우 부득이한 사유가 없는 한 지체없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다.
          <br></br>
          <br></br>④ 회사는 이용계약의 체결, 계약사항의 변경 및 해지 등 이용자와의 계약관련 절차 및 내용 등에 있어 이용자에게 편의를 제공하도록 노력합니다.
          <br></br>
          <br></br> 제10조(이용자의 의무)
          <br></br>
          <br></br>① 이용자는 회사에서 제공하는 서비스를 서비스 본래의 이용 목적 이외의 용도로 사용하거나 다음 각호에 해당하는 행위를 하여서는 안됩니다.
          <br></br>
          <br></br>1. 이용자 문의, 유료콘텐츠 복구 및 환불 요청, 이벤트 당첨 등으로 회사에 개인정보 제공 시 타인의 개인정보를 사용하거나 허위 사실을 기재하는 행위
          <br></br>2. 다른 이용자의 이용자계정을 도용 또는 부정하게 사용하거나 타인의 신용카드, 유/무선 전화, 은행 계좌 등을 무단으로 도용하여 유료콘텐츠를 구매하는 행위
          <br></br>3. 회사가 제공하지 않는 서비스를 이용하여 유료콘텐츠 등 콘텐츠를 타인과 거래하거나 매매하는 행위
          <br></br>4. 회사의 서비스 또는 애플리케이션을 이용하여 얻은 정보를 상업적/비상업적으로 이용하거나, 알려지지 않은 버그를 사용하여 서비스를 이용하는 행위
          <br></br>5. 회사의 서비스 또는 애플리케이션을 이용하여 자기 또는 타인에게 재산상의 이익을 발생시키는 행위
          <br></br>6. 타인의 명예를 훼손하거나 손해를 가하는 행위
          <br></br>7. 회사 또는 제3자의 지적재산권, 초상권 등 기타 권리를 침해하는 행위
          <br></br>8. 제3자를 기망하여 이득을 취하거나 또는 회사가 제공하는 서비스를 불건전하게 이용하거나 이용하여 제3자에게 피해를 주는 행위
          <br></br>9. 음란, 저속한 정보를 교류, 게재 또는 음란 사이트를 연결(링크)하거나 승인되지 않은 광고 또는 홍보물을 게재하는 행위
          <br></br>10. 재물을 걸고 도박하는 등 사행행위를 유도하거나 참여하는 행위
          <br></br>11. 수치심, 혐오감 또는 공포심을 일으키는 문자, 기호, 음향, 영상 등을 다른 이용자에게 전송, 유포하는 행위
          <br></br>12. 정보통신시스템, 데이터, 프로그램, 애플리케이션 등을 멸실, 훼손, 변조, 위조 등을 하거나 그 운용을 방해하는 행위
          <br></br>13. 애플리케이션을 임의로 변경 또는 애플리케이션에 다른 프로그램을 추가·삽입하거나 서버와 애플리케이션간 데이터 통신을 조작, 변경 등을 하는 행위
          <br></br>14. 회사의 동의없이 영리, 영업, 광고, 정치활동, 불법 선거운동 등을 목적으로 서비스를 사용하는 행위
          <br></br>15. 기타 공공질서 및 미풍양속을 위반하거나 불법적, 부당한 행위 및 관련법령에 위배되는 행위
          <br></br>
          <br></br>② 이용자는 회사의 웹사이트, 공식 블로그 또는 애플리케이션내의 공지사항 및 이 약관 개정사항 등을 수시로 확인하고 준수할 의무가 있으며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.
          <br></br>
          <br></br>③ 이용자는 이용자 계정 및 서비스를 이용하는 단말기에 대한 관리 책임을 부담하며, 제3자에게 이를 이용하도록 하여서는 안 됩니다. 또한, 이용자의 과실 내지 관리 소홀 또는 단말기 이용허락 등을 통해 발생하는 유료콘텐츠의 구매·이용 등에 대해서는 결제취소 내지 환불 등을 청구할 수 없습니다.
          <br></br>
          <br></br>④ 회사는 서비스 운영정책을 정하여 운영할 수 있으며, 이용자는 회사에서 정한 서비스 운영정책을 준수하여 서비스를 이용하여야 합니다.
          <br></br>
          <br></br>⑤ 회사는 서비스 운영정책을 수시로 변경할 수 있으며, 서비스 운영정책을 변경하는 경우에는 사전에 공지합니다.
          <br></br>
          <br></br> 제11조(서비스의 제공 시간 및 중지)
          <br></br>
          <br></br>① 회사는 이용자에게 서비스 이용을 승낙한 때부터 서비스를 개시합니다. 단, 일부 서비스의 경우 회사의 필요에 따라 지정된 일자부터 서비스를 제공합니다.
          <br></br>
          <br></br>② 회사는 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간 서비스를 제공합니다. 다만, 시스템 정기점검, 서버의 증설 및 교체, 각종 버그 패치, 서비스 변경 등 운영상 필요한 경우 일정기간 동안 서비스 이용을 일시 중단할 수 있습니다. 이러한 경우 회사는 그 내용 및 시간을 회사의 공식 블로그 또는 애플리케이션내의 공지사항 등에 사전에 공지합니다. 다만, 회사가 사전에 통지할 수 없는 부득이한 사유가 있는 경우에는 사후에 공지할 수 있습니다.
          <br></br>
          <br></br> 제12조(서비스 내용 및 변경)
          <br></br>
          <br></br>① 이용자는 이 약관 및 서비스 운영정책 또는 이용규칙에 따라 서비스를 이용하여야 합니다.
          <br></br>
          <br></br>② 회사는 서비스의 운영, 종료 등 서비스에 관한 포괄적인 권한을 가집니다.
          <br></br>
          <br></br>③ 회사는 서비스 개선, 각종 버그 패치 등 서비스의 운영상 또는 기술상 필요한 경우 서비스의 전부 또는 일부를 수정, 추가, 종료 등을 할 수 있으며, 변경되는 서비스의 내용 및 제공일자 등에 대해서는 공식 블로그 등을 통해 별도로 공지합니다.
          <br></br>
          <br></br>④ 회사는 다음 각호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중지 또는 종료할 수 있습니다.
          <br></br>
          <br></br>1. 전시, 사변, 천재지변 또는 국가비상사태 등 불가항력적인 사유가 있는 경우
          <br></br>2. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
          <br></br>3. 서비스용 설비의 보수 등 공사로 인한 부득이한 경우
          <br></br>4. 기타 회사의 제반 사정으로 서비스를 할 수 없는 경우
          <br></br>
          <br></br>⑤ 회사는 서비스가 변경되거나 중지된 원인이 회사의 고의 또는 과실로 인한 경우를 제외하고 서비스의 변경 및/또는 중지로 인하여 발생하는 문제에 대해 책임을 지지 않습니다.
          <br></br>
          <br></br> 제13조(정보의 제공 및 광고 게재)
          <br></br>
          <br></br>① 회사는 플랫폼사업자 및/또는 앱스토어사업자를 통해 제공받은 이용자 정보외에 이용자에게 추가정보를 요청할 수 있으며, 수집 또는 제공받은 이용자 정보에 대해서는 개인정보처리방침에서 정한 목적외로 이용하지 않습니다.
          <br></br>
          <br></br>② 회사는 서비스에 광고를 게재할 수 있으며, 이용자는 서비스 이용시 광고가 노출되는 것에 대하여 동의합니다.
          <br></br>
          <br></br>③ 회사는 이용자가 제2항의 광고에 접속·참여·거래 등을 함으로 인하여 발생하는 손실 또는 손해에 대해 어떠한 책임도 부담하지 않습니다.
          <br></br>
          <br></br>④ 회사는 단말기 알림(Push 알림)을 활용하여 이용자에게 제2항의 광고를 발송할 수 있으며, 이용자는 언제든지 애플리케이션내의 수신거부 기능을 이용하여 수신을 거부할 수 있습니다.
          <br></br>
          <br></br> 제14조(유료콘텐츠의 구매 및 사용기간 등)
          <br></br>
          <br></br>① 이용자는 서비스를 이용하고 있는 단말기의 종류에 따른 각 앱스토어사업자의 결제정책에 따라 유료콘텐츠를 구매할 수 있으며, 해당 결제 정책의 차이로 인하여 결제금액에 차이가 발생할 수 있습니다. 또한 유료콘텐츠의 구매 대금은 앱스토어사업자와 연계된 이동통신사나 플랫폼사업자 및/또는 앱스토어사업자가 정하는 방법 및 정책에 따라 부과되며, 납부방식 역시 해당 사업자의 결제정책을 따릅니다.
          <br></br>
          <br></br>② 이용자가 서비스에서 구매한 유료콘텐츠는 해당 서비스 애플리케이션을 다운로드 받아 설치한 단말기에서만 이용할 수 있습니다.
          <br></br>
          <br></br>③ 이용자가 구매한 유료콘텐츠의 사용기간은 기본적으로 구매일로부터 1년이며, 이 기간이 경과된 경우 이용자는 해당 유료콘텐츠에 대한 사용권을 상실합니다. 단, 사용기간이 별도로 명시된 유료콘텐츠의 경우에는 구매시 명시된 사용기간에 따릅니다. 이용자는 회사가 정하여 별도로 고지한 방법 이외에는 유료콘텐츠를 이용자 계정에서만 이용할 수 있으며, 제3자에게 양도, 대여, 매매 또는 환전 등을 할 수 없습니다.
          <br></br>
          <br></br> 제15조(구독 서비스)
          <br></br>
          <br></br>① 구독 서비스를 이용하는 경우 이용자가 미리 등록한 결제 수단을 통하여 결제 주기에 따라 이용 요금이 정기 결제되며 이용 기간이 자동으로 갱신됩니다.
          <br></br>
          <br></br>② 구독 서비스의 프로모션 등이 적용되어 할인 혜택이 제공되는 경우 할인 혜택이 종료된 이후부터 정가로 정기 결제가 이루어집니다.
          <br></br>
          <br></br>③ 구독 서비스는 가입 후 해지하기 전까지 서비스가 지속됩니다. 구독 만료일로부터 최소 24시간 전에 서비스를 해지하지 않을 경우, 구독 서비스 실제 이용 여부와 상관없이 매월 지정된 결제 일자에 이용 요금이 자동 결제됩니다.
          <br></br>
          <br></br>④ 구독 서비스를 해지할 경우 결제가 이루어진 구독 서비스의 잔여 이용 기간 동안은 구독 서비스를 정상 이용할 수 있으며, 다음 이용 기간부터 자동 결제가 이루어지지 않습니다.
          <br></br>
          <br></br>⑤ 구독 서비스는 구매 즉시 상품을 사용한 것으로 간주되어 청약 철회가 제한될 수 있습니다.
          <br></br>
          <br></br> 제16조(In-App 결제)
          <br></br>
          <br></br>① 애플리케이션은 유료콘텐츠 구매를 위한 In-App결제 기능을 포함하고 있습니다.
          <br></br>
          <br></br>② 이용자는 단말기의 비밀번호 설정기능, 앱스토어사업자 및/또는 이동통신사가 제공하는 비밀번호 설정기능 등을 이용하여 제3자의 In-App결제를 방지하여야 합니다.
          <br></br>
          <br></br>③ 회사는 이용자가 In-App결제 방지기능 등을 이용하지 않거나 이용자의 부주의로 비밀번호가 노출되어 발생하는 제3자의 In-App결제에 대해 어떠한 책임도 부담하지 않습니다.
          <br></br>
          <br></br>④ 이용자가 이동통신사의 청소년 요금제에 가입한 경우, 해당 단말기에서의 In-App결제를 하면 그 내용은 법정대리인의 동의가 있는 것으로 간주합니다.
          <br></br>
          <br></br>⑤ 이용자는 In-App결제 대금을 성실히 납부하여야 할 책임이 있습니다.
          <br></br>
          <br></br>⑥ 회사의 정책 및 결제업체(이동통신사, 앱스토어사업자 등)의 정책, 방침 등에 따라 각 결제수단별로 결제한도가 부여 또는 조정될 수 있습니다.
          <br></br>
          <br></br> 제17조(청약 철회 및 환불 등)
          <br></br>
          <br></br>① 이용자는 구매한 유료콘텐츠를 구매일 또는 유료콘텐츠 이용가능일로부터 7일 이내에 별도의 수수료 없이 청약철회(구매 취소)를 할 수 있습니다. 단, 청약철회 요청시 이미 사용하였거나 사용한 것으로 간주되는 유료콘텐츠 등 이에 준하는 특성을 가진 유료콘텐츠에 대하여는 「전자상거래 등에서의 소비자보호에 관한 법률」 제18조 제2항에 따라 청약철회(구매취소)가 제한될 수 있습니다.
          <br></br>
          <br></br>② 회사는 이 약관 제12조 제3항 및 제4항 또는 회사의 귀책사유로 인하여 이용자가 구매한 유료 콘텐츠를 서비스에서 이용하지 못하는 경우, 동일·유사한 유료콘텐츠로 보상하거나 해당 구매 금액을 구매일에 관계없이 전액 환불합니다.
          <br></br>
          <br></br>③ 이용자가 구매한 유료콘텐츠에 대한 환불은 이용자가 이용한 앱스토어사업자의 환불 정책에 따라 진행되며, 자세한 환불 신청절차는 앱스토어사업자의 운영정책에 따릅니다. 또한 구매한 유료콘텐츠에 대한 환불이 완료된 경우에는 환불 금액만큼 유료콘텐츠가 차감됩니다. 또한, 유료콘텐츠가 다르게 지급된 경우에는 본조 제2항에서 정한 방법으로 환불을 합니다. 다만, 이용자가 다르게 지급된 유료콘텐츠의 일부를 사용한 경우에는 동일·유사한 유료콘텐츠로만 보상합니다.
          <br></br>
          <br></br>④  회사는 청약철회가 제한되는 유료콘텐츠에 대해 In-App결제 전에 청약철회가 제한됨을 표시하는 등의 방법으로 청약철회 등의 권리행사가 방해 받지 아니하도록 조치 합니다. 만약 회사가 이러한 조치를 하지 아니한 경우에는 청약철회 제한 사유에도 불구하고 이용자는 청약철회를 할 수 있습니다. 다만, 다음 각호의 경우에는 청약철회가 제한됩니다.
          <br></br>
          <br></br>1. 구매 후 즉시 사용이 시작되거나 즉시 서비스에 적용되는 유료콘텐츠의 경우
          <br></br>2. 추가적인 혜택이 제공된 유료콘텐츠 구매 후 해당 추가 혜택이 사용된 경우
          <br></br>3. 묶음형(패키지형)으로 판매된 유료콘텐츠의 일부가 사용된 경우
          <br></br>4. 개봉행위를 사용으로 볼 수 있거나 개봉 시 효용이 결정되는 캡슐형/확률형 유료콘텐츠를 개봉한 경우
          <br></br>5. 유료콘텐츠의 일부를 사용하였거나 이미 시간이 지나 다시 판매하기 곤란한 경우
          <br></br>
          <br></br>⑦ 미성년자가 법정대리인의 동의없이 In-App 결제로 유료콘텐츠를 구매한 경우, 미성년자 또는 법정대리인은 In-App결제를 취소할 수 있습니다. 단, 미성년자의 In-App결제가 법정대리인으로부터 처분을 허락받은 재산의 범위 내인 경우 또는 미성년자가 사술 등을 사용하여 성년자로 믿게 한 때에는 취소가 제한됩니다. 유료콘텐츠 구매자가 미성년자인지 여부는 In-App결제가 진행된 단말기 또는 신용카드 등 결제수단의 명의자를 기준으로 판단됩니다. 미성년자의 결제취소를 요청하시는 경우 회사의 필요에 따라 미성년자 및 법정대리인을 증명할 수 있는 서류를 제출하여야 합니다.
          <br></br>
          <br></br>⑧ In-App결제는 앱스토어사업자가 제공하는 결제방식에 따르며. In-App결제 과정에서 과오금이 발생하는 경우 앱스토어사업자에게 환불을 요청하여야 합니다. 만약, In-App 결제과정에서 과오금이 발생하여 회사에 환불(결제취소 포함) 등을 요청하는 경우 회사는 앱스토어사업자의 정책, 시스템에 따라 가능한 경우에 한하여 앱스토어사업자에게 과오금 환불을 요청하여 환불을 진행하며, 과오금 환불 방식은 제18조 제3항에 따릅니다. 다만, 앱스토어사업자가 과오금 환불을 제한하고 있는 경우에는 이용자가 직접 앱스토어사업자에게 과오금 환불을 요청하여야 합니다.
          <br></br>
          <br></br> 제18조(청약 철회 등의 효과)
          <br></br>
          <br></br>① 회사는 이용자가 제17조 제1항 본문에 따른 청약철회를 한 경우 지체없이 해당 유료콘텐츠를 회수 또는 삭제하고, 유료콘텐츠를 회수 또는 삭제한 날로부터 3영업일 이내에 지급받은 대금을 환불하거나 결제취소를 통해 환불 합니다.
          <br></br>
          <br></br>② 제1항의 경우 회사가 이용자에게 환불을 지연한 때에는 그 지연기간에 대하여 「전자상거래 등에서의 소비자보호에 관한 법률」 및 같은 법 시행령에서 정하는 이율을 곱하여 산정한 지연이자를 지급합니다.
          <br></br>
          <br></br>③ 회사는 환불을 함에 있어 이용자가 신용카드, 그 밖에 「전자상거래 등에서의 소비자보호에 관한 법률 시행령」에서 정한 결제수단으로 대금을 지급한 때에는 지체없이 당해 결제수단을 제공한 사업자로 하여금 대금의 청구를 정지 또는 취소하도록 요청합니다. 다만, 회사가 결제업자로부터 이미 대금을 지급받은 때에는 이를 결제업자에게 환불하고 이를 소비자에게 통지합니다.
          <br></br>
          <br></br>④ 이용자가 제17조 제1항 본문에 따른 청약철회를 한 경우 유료콘텐츠 등의 반환에 필요한 비용은 이용자가 부담하고, 회사는 이용자에게 청약철회를 이유로 위약금 또는 손해배상을 청구하지 않습니다.
          <br></br>
          <br></br> 제19조(계약 해지 및 서비스 이용 중지 등)
          <br></br>
          <br></br>① 이용자는 언제든지 개별 서비스의 이용을 원하지 않는 경우, 개별 서비스내 탈퇴를 통하여 이용계약을 해지할 수 있습니다.
          <br></br>
          <br></br>② 이용자가 개별 서비스에서 탈퇴를 신청하는 경우, 이용자의 서비스 이용기록, 유·무료콘텐츠 등 모든 정보가 삭제됨으로, 이용자는 개별 서비스 탈퇴 전 유료콘텐츠의 환불을 요청하여야 합니다. 또한, 개별 서비스 탈퇴를 신청한 경우에는 탈퇴 후 2주간(14일) 동안 해당 서비스를 이용할 수 없습니다.
          <br></br>
          <br></br>③ 회사는 이용자가 제10조 또는 서비스 운영정책에서 정한 사항을 위반하는 경우 이용계약을 해지하거나 기간을 정하여 서비스 이용을 제한할 수 있습니다.
          <br></br>
          <br></br>④ 이용자는 제3항에 따른 서비스 이용제한에 대해 회사가 정한 절차에 따라 이의신청을 할 수 있으며, 회사는 이용자의 이의신청이 정당하다고 판단되는 경우 즉시 서비스 이용을 재개합니다.
          <br></br>
          <br></br>⑤ 회사는 제3항에 따른 서비스 이용제한이 정당한 경우 서비스 이용제한으로 인하여 이용자가 입은 손해를 배상할 책임을 부담하지 않습니다.
          <br></br>
          <br></br>⑥ 회사는 이용자의 서비스 과몰입 방지를 위해 이용방법, 이용시간, 이용횟수 등을 제한할 수 있으며, 이용자의 서비스 과몰입 정도에 따라 이용자 보호프로그램을 적용할 수 있습니다. 만약, 이용자가 이용자 보호프로그램의 적용을 거부하는 경우, 회사는 이용자의 의사와 관계없이 서비스 제공을 중단할 수 있습니다.
          <br></br>
          <br></br> 제20조(잠정조치로서의 이용제한)
          <br></br>
          <br></br>① 회사는 다음 각 호에 해당하는 문제에 대한 조사가 완료될 때까지 이용자의 서비스 이용을 잠정적으로 중지할 수 있습니다.
          <br></br>
          <br></br>1. 이용자 계정이 해킹 또는 도용당하였다는 정당한 신고가 접수된 경우
          <br></br>2. 서비스 운영정책에서 정하고 있는 제재대상 행위에 해당된다고 합리적으로 의심되는 경우
          <br></br>3. 그 밖에 제1호 및 제2호에 준하는 행위에 해당된다고 판단되는 경우
          <br></br>
          <br></br>② 회사는 제1항 각호의 조사가 완료된 후 서비스 이용기간에 비례하여 유료콘텐츠의 이용기간을 연장합니다. 다만, 제1항에 의한 위법행위자로 판명된 경우에는 그러하지 아니합니다.
          <br></br>
          <br></br> 제21조(손해배상)
          <br></br>
          <br></br>① 이용자는 이 약관의 의무를 위반함으로 인하여 회사에 손해를 입힌 경우 또는 이용자가 서비스를 이용하는 과정에서 회사에 손해를 입힌 경우 회사에 대하여 그 손해를 배상하여야 합니다.
          <br></br>
          <br></br>② 이용자는 서비스 이용과정에서 행한 불법행위나 이 약관 위반행위로 인하여 회사가 이용자 이외의 제3자로부터 손해배상청구 또는 소송을 비롯한 각종 이의제기를 받는 경우, 자신의 책임과 비용으로 회사를 면책시켜야 하며, 회사가 면책되지 않음으로 인하여 회사에 손해가 발생한 경우 그 손해를 배상하여야 합니다.
          <br></br>
          <br></br> 제22조(면책)
          <br></br>
          <br></br>① 회사는 전시, 사변, 천재지변, 국가비상사태, 해결이 곤란한 기술적 결함 기타 불가항력적 사유로 서비스를 제공할 수 없는 경우에는 그 책임이 면제됩니다.
          <br></br>
          <br></br>② 회사는 이용자의 귀책사유로 인한 서비스의 중지·이용장애에 대하여 책임을 지지 아니하며, 기간통신사업자가 전기통신서비스를 중지하거나 정상적으로 제공하지 아니하여 이용자에게 손해가 발생한 경우에 대해서도 책임을 부담하지 않습니다.
          <br></br>
          <br></br>③ 회사는 사전에 공지되거나 긴급하게 실시된 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 서비스가 중지되거나 장애가 발생한 경우에 대해서는 그 책임이 면제됩니다.
          <br></br>
          <br></br>④ 회사는 이용자가 서비스를 이용하여 기대하는 점수, 순위 등을 얻지 못한 것에 대하여 책임을 지지 않으며, 서비스에 대한 취사 선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.
          <br></br>
          <br></br>⑤ 회사는 이용자가 본인의 개인정보 등(이용자 계정 포함)을 변경하여 얻는 불이익 및 정보상실에 대해 일체 책임을 지지 않습니다.
          <br></br>
          <br></br>⑥ 회사는 이용자의 단말기 환경, 회사의 귀책사유 없는 네트워크 환경 등으로 인하여 서비스 이용과정에서 발생하는 제반 문제에 대해서 책임을 지지 않습니다.
          <br></br>
          <br></br>⑦ 회사는 이용자 상호간 또는 이용자와 제3자 간에 서비스를 매개로 발생한 분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해를 배상할 책임도 없습니다.
          <br></br>
          <br></br>⑧ 회사가 제공하는 서비스 중 무료 서비스 또는 무료콘텐츠의 경우에는 손해배상의 대상에서 제외됩니다. 다만, 회사의 고의 또는 과실로 인하여 발생한 손해의 경우는 제외합니다.
          <br></br>
          <br></br> 제23조(재판권 및 준거법)
          <br></br>
          <br></br>① 서비스 이용과 관련하여 회사와 이용자간에 발생한 분쟁에 관한 소송은 민사소송법 등 관련법령에서 정한 절차에 따른 법원을 관할법원으로 합니다.
          <br></br>
          <br></br>② 회사와 이용자간에 제기된 소송에는 대한민국 법을 적용합니다.

 

          <br></br><br></br>[부칙]

(시행일) 이 약관은 2024년 7월 25일부터 적용됩니다.
        </div>
      }
      buttonElement={
        <div className='flex gap-1.5'>
          <button className='w-full h-14 text-white bg-primary rounded-[20px]' onClick={() => router.push('/form/step2')}><span>닫기</span></button>
        </div>
      }
    />
  );
}

export async function getStaticProps() {
  return {
    props: {
      layoutClassName: 'bg-white',
    },
  };
}