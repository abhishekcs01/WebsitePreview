import { CardTypes } from "../../raaghu-elements/src/rds-card";

const SalesMapCard = () => {
    return (
        <RdsCard
            borderColor=""
            cardTitle=""
            cardSubTitle=""
            cardText=""
            colorVariant="primary"
            iconName="users"
            layout="Vertical"
            showCardText={false}
            showFooter={false}
            showIcon={false}
            showLinkButton={false}
            showSubTitle={false}
            showTitle={false}
            showTitleAndSubText={false}
            state="Default"
            style="Default"
            type={CardTypes.CardWithMap}
        >
            <RdsWidget
                bigNumberLabel="$632,230"
                headerTitle="Sales"
                iconColor="success"
                iconLabel="$27,203"
                iconName="flip_back"
                iconTooltipLabel="Flip"
                iconTooltipPosition="top"
                isBignumberIcon
                isRefreshRequired
            >
                <div className="pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-5 pt-3 mt-lg-0 mt-md-5 mt-0">
                    <RdsMap
                        color="#A478E6"
                        mapList={[
                            {
                                country: 'cn',
                                value: 1389618778
                            },
                            {
                                country: 'in',
                                value: 1311559204
                            },
                            {
                                country: 'us',
                                value: 331883986
                            },
                            {
                                country: 'id',
                                value: 264935824
                            },
                            {
                                country: 'pk',
                                value: 210797836
                            },
                            {
                                country: 'br',
                                value: 210301591
                            },
                            {
                                country: 'ng',
                                value: 208679114
                            },
                            {
                                country: 'bd',
                                value: 161062905
                            },
                            {
                                country: 'ru',
                                value: 141944641
                            },
                            {
                                country: 'mx',
                                value: 127318112
                            }
                        ]}
                    />
                </div>
            </RdsWidget>
        </RdsCard>
    );
};

export default SalesMapCard;