import React, {FC} from 'react';
import Card, {CardVariants} from "../Card";

const CardPage: FC = () => {
    return (
        <div>
            <Card
                onClick={(num) => console.log('click', num)}
                height='10rem'
                width='10rem'
                variant={CardVariants.primary}>
                <button>Кнопка</button>
            </Card>
        </div>
    );
};

export default CardPage;