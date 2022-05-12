import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabHeaderStore from '../../components/TabHeaderStore';
import PublicText from '../../components/texts/PublicText';
import PublicBoldText from '../../components/texts/PublicBoldText';

const Row = ({children, title}) => {
    return (
        <View style={styles.row}>
            <View style={styles.article}>
                <PublicBoldText style={styles.title}>{title}</PublicBoldText>
                {children}
            </View>
            
        </View>
    );
};

export default function AgreementScreen () {
    return (
        <View style={styles.container}>
            <TabHeaderStore title={"[개인정보제공 동의서]"} />
            <Row title={"[개인정보 수집 목적]"}>
                <PublicText style={styles.content}>
                    매장정보 사업자 등록증은 매장이 실제로 존재하는지 확인을 하기 위해서만 이용되며 그 이외의 목적으로는 사용되지 않습니다.
                </PublicText>
            </Row>
            <Row title={"[개인 정보 이용 방안]"}>
                <PublicText style={styles.content}>
                    사업자 등록증 이외의 매장정보는 Wait4U를 이용하는 고객들에게 매장의 정보를 전 달하기 위해 사용 됩니다.
                    사업자 등록증 이외의 매장정보는 Wait4U를 이용하는 고객들에게 매장의 정보를 전 달하기 위해 사용 됩니다.
                    매장의 수입이나 고객들의 주문이나 예약과 같은 정보는 귀하의 원활한 매장관리를 위해 가공 후 제공되며 그 이외의 목적으로는 활용되지 않습니다. 
                    개인정보 회원 가입시 수집되는 개인정보는 본인 확인을 위해서만 활용되며 그 이외의 목적으로는 사용되지 않습니다. 
                </PublicText>
            
            </Row>
            <Row title={"[개인정보 처리 방침]"}>
                <PublicText style={styles.content}>
                    회원탈퇴 이후 앱 내에 수집된 귀하의 모든 개인정보는 일괄적으로 삭제됩니다.
                </PublicText>
            
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    row: {
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
    },
    article: {
        marginTop: 8,
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    content: {
        fontSize: 16,
    }
})