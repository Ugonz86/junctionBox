Your team at amazon has been contracted by a telecommunications company that is trying to upgrade junction boxes all over Techlandia. Some of the junction boxes have already been upgraded , and other boxes have not. Your task is to identify the oldest boxes that need to be upgraded first but leaving newer model boxes so that they will not be prioritized.

All junction boxes are identified by an alphanumeric identifier , followed by space delimited version information. The older generation uses space delimited lowercase English Strings to identify the version, but the newer generation uses space delimited positive integers to identify the version. Your task is to sort the junction boxes in the following order:

1> The older junction boxes should be returned first ,sorted by lexicographic ordering of alphabetic version.
    
2> If there are any ties in the older generation ties should be broken by the alphanumeric identifier.

3> The newer generation boxes must all come after the older generation in the original order they were given in the input.

INPUT :

The input to the function/method consists of one argument boxList, a list of strings representing all of the identifiers and version information.

OUTPUT:

Return a list of strings representing the correctly prioritized orders according to this system.

Constraints:

0<=number of boxes<1000

Note:

The Junction box identifier consists of only lowercase English characters and numbers . Sorting for tiebreaks should use ASCII value - as a example , the order identifier 'a1' should come before the order identifier 'aa'.

Examples

Input:

boxLst=

[ykc 82 01]

[eo first qpx]

[09z cat hamster]

[06f 12 25 6]

[az0 first qpx]

[236 cat dog rabbit snake]

output:

[236 cat dog rabbit snake]

[09z cat hamster]

[az0 first qpx]

[eo first qpx]

[ykc 82 01]

[06f 12 25 6]

Explanation The four old generation junction boxes should come first, with the '"cat dog rabbit snake" box coming before the "cat hamster type". Since the two boxes of type "first qpx" have the same version information, they should come next, using the "azp" identifier to come before the "eo" identifier. Finally the already upgraded junction boxes should come last in the origin order they were provided in the file.

Time complexity: O(nlogn) ???
Space complexity: O(n) ???

