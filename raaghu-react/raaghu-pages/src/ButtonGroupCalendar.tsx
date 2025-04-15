const ButtonGroupCalendar = () => {
    return (
        <RdsButtonGroup
            buttonGroupItems={[
                {
                    id: '1',
                    label: 'DAY',
                    name: 'day'
                },
                {
                    id: '2',
                    label: 'WEEK',
                    name: 'week'
                },
                {
                    id: '3',
                    label: 'MONTH',
                    name: 'month'
                }
            ]}
            colorVariant="primary"
            role="button"
            size="medium"
        />
    );
};

export default ButtonGroupCalendar;