import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

const testCases = [
    { amount: 100, expectedText: 'PLN 100.00 = $28.57' },
    { amount: 200, expectedText: 'PLN 200.00 = $57.14' },
    { amount: 350, expectedText: 'PLN 350.00 = $100.00' },
    { amount: 0, expectedText: 'PLN 0.00 = $0.00' },
  ];

const usdToPlnTestCases = [
    { amount: 1, expectedText: '$1.00 = PLN 3.50' },
    { amount: 10, expectedText: '$10.00 = PLN 35.00' },
    { amount: 0, expectedText: '$0.00 = PLN 0.00' },
    { amount: 123.45, expectedText: '$123.45 = PLN 432.08' },
];

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    for( const testCase of testCases) {
        it(`should render correct conversion info for amount=${testCase.amount}`, () => {
            render(<ResultBox from="PLN" to="USD" amount={testCase.amount} />);
            const output=screen.getByTestId('output');
            expect(output).toHaveTextContent(testCase.expectedText);
        });
    }

    for (const usdToPlnTestCase of usdToPlnTestCases) {
        it(`should render correct conversion info for amount=${usdToPlnTestCase.amount}`, () => {
            render(<ResultBox from="USD" to="PLN" amount={usdToPlnTestCase.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(usdToPlnTestCase.expectedText);
        })
    }

    it('should render proper info when both currencies are the same', () => {
        render(<ResultBox from="PLN" to="PLN" amount={123} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent('PLN 123.00 = PLN 123.00');
    });

    it('should render "Wrong value" when amount is negative', () => {
        render(<ResultBox from="PLN" to="USD" amount={-100} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent("Wrong value...");
    });
    
});