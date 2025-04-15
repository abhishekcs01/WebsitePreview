import { CardTypes } from "../../raaghu-elements/src/rds-card";

const DailySalesGrowthCard = () => {
    return (
        <RdsCard
            borderColor=""
            buttonLabel1="Link Button"
            buttonLabel2="Cancel"
            buttonLabel3="Okay"
            cardSubTitle="Card Sub title"
            cardText="In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo"
            cardTitle="Card title"
            colorVariant="primary"
            iconName="users"
            imageUrl="https://picsum.photos/seed/picsum/1200/600"
            layout="Vertical"
            showCardText
            showFooter
            showIcon
            showLinkButton
            showSubTitle
            showTitle
            showTitleAndSubText
            state="Default"
            style="Default"
            type={CardTypes.CardWithBooleanChart}
        >
            <RdsWidget
                headerTitle="Daily Sales Growth"
                isRefreshRequired
            >
                <div>
                    <RdsBigNumber
                        bigNumber="$632,230"
                        icon="triangle_down"
                        iconFill
                        iconHeight="12px"
                        iconWidth="12px"
                        subTitle="$27,203"
                        subTitleColorVariant="danger"
                    />
                    <div className="d-flex align-items-center fw-normal my-2 mb-4">
                        <span>
                            <RdsIcon
                                colorVariant="danger"
                                fill
                                height="14px"
                                name="triangle_up"
                                width="14px"
                            />
                        </span>
                        <span className="fs-6 fw-medium text-danger">
                            $27,203
                        </span>
                    </div>
                    <RdsBarChart
                        dataSets={[{
                            backgroundColor: () => { },
                            barThickness: 7,
                            borderColor: '#666666',
                            borderRadius: 10,
                            borderSkipped: false,
                            borderWidth: 0,
                            data: [15, 18, 67, 34, 78],
                            label: 'Sales Growth'
                        }]}
                        id="barchart"
                        labels={['Day 4', 'Day 8', 'Day 12', 'Day 16', 'Day 20']}
                        options={{
                            elements: { bar: { borderWidth: 0, width: 1 } },
                            indexAxis: 'x',
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { labels: { usePointStyle: true }, pointStyle: 'line', position: '' },
                                scales: { y: { beginAtZero: true } },
                                title: { display: false, text: 'Daily Sales Growth' },
                                tooltip: { usePointStyle: true }
                            },
                            responsive: true,
                            scales: {
                                x: {
                                    border: { dash: [3, 3] },
                                    grid: {
                                        borderDash: [5, 5],
                                        borderDashOffset: 2,
                                        borderWidth: 1,
                                        color: 'rgba(218, 221, 224, 0.8)',
                                        drawBorder: true,
                                        drawTicks: true,
                                        tickBorderDash: [5, 5]
                                    }
                                },
                                y: { display: true, grid: { display: false } }
                            }
                        }}
                    />
                </div>
            </RdsWidget>
        </RdsCard>
    );
};

export default DailySalesGrowthCard;