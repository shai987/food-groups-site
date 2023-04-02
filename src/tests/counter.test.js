import { render, screen } from '@testing-library/react';
import Breads from "../components/Grains&Bakery/Breads";

test('testing the result element', () => {
        render(<Breads />);
        const counterDivText = screen.getByText(/מספר מנות/);
        console.log(counterDivText.textContent);
        expect(counterDivText.textContent).toContain('')
});