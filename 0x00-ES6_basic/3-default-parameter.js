export default function getSumOfHoods(initialnumber, expansion1989, expansion2019) {
    expansion1989 = expansion1989 ?? 89;
    // The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

    expansion2019 = expansion2019 ?? 19;

    return initialnumber + expansion1989 + expansion2019;
}