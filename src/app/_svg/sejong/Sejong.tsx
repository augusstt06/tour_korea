import usePlaceStore from '@/app/_store/place'
export default function Sejong() {
  const { detailPlace } = usePlaceStore()
  const checkCurrentPlace = (id: string) => {
    if (id === detailPlace)
      return {
        fill: '#e2d4ea',
      }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      width="800"
      height="600"
      viewBox="0 0 800 1149"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g id="세종특별자치시_시군구_경계">
        <path
          d="M 126.33 11.56 126.33 11.97 126.02 11.89 125.94 12 129.15 17.24 130.61 19.03 131.01 19.14 131.97 19.39 132.15 19.44 132.48 19.45 140.93 19.4 144.68 18.69 148.63 17.77 161.63 15.63 169.3 21.62 173.88 22.58 174.51 22.52 174.71 22.49 175.24 22.38 175.29 22.38 175.49 21.23 179 19.69 183.6 19.56 192.92 20.4 201.05 24.18 207.06 26.78 211.59 27.79 213.91 28.2 215.54 31.19 215.76 35.66 215.42 36.66 215.85 39.18 217.34 44.04 218.61 46.7 222.78 47.36 227.27 51.26 227.52 51.52 227.41 52.64 227.17 53.18 233.17 55.13 240.25 56.06 247.26 58.14 246.89 60.11 248.11 61.73 250.34 63.54 256.16 65.35 257.27 65.51 258.5 65.67 258.85 65.71 259.27 65.75 264.82 65.33 271.65 64.93 272.15 65.55 272.74 66.28 273.28 68.44 272.55 69.16 272.08 69.57 271.4 70.73 271.07 71.56 270.8 74.56 271.29 77.42 271.29 77.43 271.63 79.16 273.37 81.56 273.98 82.11 275.32 83.28 275.79 83.68 285.67 91.34 288.83 92.64 289.08 92.7 289.57 92.81 290.51 92.67 291.06 92.37 291.75 91.98 291.82 91.88 292.63 90.57 293.11 90.14 294.29 89.17 295.88 88.37 299.23 88.65 300.1 88.87 301.03 89.12 301.56 89.27 307.61 94.01 307.93 94.74 308.92 97.31 309.25 99.52 309.3 100.04 309.33 101.55 309.34 102.05 309.34 102.28 309.34 102.76 309.37 103.73 309.4 104.68 317.43 112.34 322.25 115.58 328.59 127.38 333.36 134.18 333.76 134.6 340.28 137.5 341.44 136.29 349.31 130.71 349.52 130.78 349.85 130.89 352.01 131.62 354.11 133.89 354.45 134.47 357.42 137.94 366.21 143.69 373.32 146.23 385.74 147.51 388.81 147.66 393.84 145.84 401.56 142.36 402.31 141.41 403.11 140.3 403.19 140.19 403.32 140.07 404.65 139.36 412.11 136.99 412.41 137.27 412.85 137.68 413.12 137.93 413.36 138.16 413.77 138.55 418.58 143.13 418.64 143.24 418.64 143.92 418.67 144.01 418.69 144.06 419.99 146.78 421.03 148.83 424.02 150.74 434.31 154.07 442.47 153.86 443.42 153.78 445.34 153.4 445.41 153.17 446.48 153.19 450.1 154.05 451.55 154.82 454.75 156.8 455.48 157.29 457.29 160.61 461.14 163.45 464.71 165.77 467.59 166.47 485.67 169.87 492.05 170.57 492.67 170.71 493.45 170.9 495.52 171.53 499.19 173.83 508.38 183.62 508.09 196.61 503.65 221.08 502.96 224.84 501.13 234.26 501.1 234.27 499.87 234.78 497.75 236.02 495.1 238.39 493.29 240.63 486 253.08 475.2 262.24 471.52 262.09 471.13 262.02 468.95 261.65 466.77 261.29 456.09 263.07 454.76 264.55 447.53 289.86 442.59 295.74 441.62 297.77 434.69 312.72 436.33 319.52 437.94 322.71 430.14 327.69 429.76 327.92 428.71 328.29 427.26 327.03 426.1 326.02 426.09 326.01 421.92 324.24 421.64 324.17 420.17 326.04 417.79 331.39 418.32 332.71 422.59 342.67 427.27 352.29 427.66 352.86 427.95 353.15 428.11 353.32 428.19 353.37 428.32 353.45 428.55 353.5 428.93 352.91 429.94 351.86 432.36 350.4 454.57 342.05 456.07 341.68 456.81 341.54 458.27 341.52 459.03 341.51 459.88 341.69 460.5 341.98 461.25 342.42 461.62 342.66 462.26 343.29 462.26 343.29 463.14 344.35 464.03 345.42 464.38 346.09 464.58 346.86 464.67 347.67 464.51 348.59 464.5 348.64 463.43 352.98 463.11 353.85 462.56 355.24 462.12 355.92 461.79 356.33 461.39 356.88 460.75 358.72 460.72 358.81 460.6 359.5 460.42 360.57 460.22 362.11 460.22 362.46 460.24 363.69 460.25 363.96 460.32 365.37 461.24 372.11 461.54 374.17 461.69 375.06 462.2 377.87 462.34 378.39 462.49 378.89 463.02 380.68 463.17 381.2 463.88 383.25 464.21 383.73 464.36 383.95 464.52 384.05 464.86 384.27 465.3 384.53 466.15 384.76 467.28 385.04 469.32 385.55 470.89 385.38 471.36 385.32 472.35 385.07 472.88 384.94 473.72 384.92 474.66 384.91 475.53 385.41 475.63 385.57 476 386.07 476.11 387.57 476.15 389.06 475.87 392.23 475.69 393.9 475.01 395.95 474.6 397.53 474.43 399.04 474.47 400.29 474.74 401.45 474.86 401.98 475.42 403.16 475.68 403.59 476.26 404.53 476.42 404.55 478.71 404.92 481.67 405.39 483.24 405.64 484.51 406.98 485.02 407.76 485.28 408.16 485.79 409.19 486.56 410.79 491.46 426.15 491.81 428.15 491.91 429.63 492 430.96 490.82 438.48 488.85 443.99 495.5 451.24 495.55 451.3 496.5 452.24 497.87 453.59 498.48 454.12 499.1 454.66 500.28 455.78 501.69 457.92 501.81 458.12 502.45 459.24 503.76 462.1 503.79 462.19 504.06 463 504.27 463.6 504.39 463.95 504.54 464.83 504.73 466.24 504.92 467.8 504.97 468.48 505.01 468.93 504.97 469.85 504.77 471.66 504.57 472.33 503.56 475.59 501.98 479.37 501.61 480.24 500.72 482.06 500.22 482.85 499.81 484.26 499.52 485.76 499.46 486.29 499.33 487.33 499.2 490.89 499.22 492.25 499.44 493.53 499.77 495.09 500.23 496.89 500.31 497.2 500.34 498.11 500.28 499.08 500.15 500.15 499.89 501.26 499.15 502.68 498.52 503.83 497.79 504.8 497.41 505.26 497.25 505.45 496.83 505.96 496.17 506.71 492.31 510.35 491.25 511.21 490.22 511.92 487.58 513.34 486.18 514 486.13 514.02 485.79 514.17 485.74 514.26 485.03 515.55 484.61 517.02 484.64 518.1 484.93 518.97 485.65 520.28 495.8 528.34 497.08 529.27 497.58 529.47 500.53 530.26 500.87 530.34 502.44 530.68 503.49 530.73 503.65 530.74 510.18 531.03 512.53 531.12 522.14 531.22 522.55 531.2 523.46 531.16 531.96 529.66 539.77 528.22 545.17 528.04 545.48 528.04 546.73 528.02 548.48 536.03 558.04 549.31 561.23 553.48 563.37 555.18 564.89 555.89 565.35 556.1 569.25 557.73 573.61 558.65 574.36 559.1 574.39 559.11 576.01 560.52 587.14 572.66 589.36 576.44 588.38 578.07 587.99 578.74 587.09 580.23 586.92 580.47 586.28 581.36 585.91 581.87 585.4 583.06 590.63 601.49 592.87 602.93 593.65 603.24 594.08 603.22 595.99 601.9 601.93 598.69 606.49 596.93 611.63 596.2 619.22 595.88 624.5 598.13 625.32 598.75 625.86 599.16 628.08 601.37 630.16 603.76 632.83 604 634.27 603.95 636.15 603.71 645.02 605.63 646.15 605.59 648.94 605.19 655.84 603.8 656.52 603.66 656.97 603.57 657.02 603.5 657.63 602.62 657.78 602.06 657.98 601.44 658.01 601.34 658.26 600.76 659.78 598.08 660.11 597.68 660.95 596.99 662.13 596.22 662.64 595.97 662.72 595.95 669.96 596.68 686.4 588.76 700.69 585.15 701.54 584.9 703.86 583.98 704.03 584.02 703.74 597.73 706.3 601.1 706.44 601.32 706.4 601.47 702.21 608.3 702.03 608.43 699.66 610.1 698 610.85 697.45 610.88 692.81 611.07 692.43 611.23 691.5 611.74 691.42 611.83 691.28 612.1 691.05 612.56 692.93 617.27 693.76 619.27 694 619.6 694.45 619.88 696.27 619.77 696.52 619.72 696.92 619.64 697.2 619.57 697.6 619.48 699.55 619.11 699.64 619.18 699.77 619.34 699.81 619.39 705.78 627.08 706.65 628.44 706.72 628.55 708.21 631.9 709.26 634.9 709.92 637.6 709.3 637.74 709.05 637.8 708.96 637.99 708.56 638.77 708.45 638.99 707.64 642.8 707.78 645.86 707.91 647.34 708.85 648.12 709.76 648.81 714.89 650.41 716.86 650.61 719.18 652.39 720.66 653.78 721.08 654.16 723.01 662.54 723.36 665.95 723.16 668.39 723.11 668.55 722.65 669.85 722.08 670.74 721.96 671.72 722.13 674.02 722.67 675.56 722.74 675.71 723.03 676.36 724.43 677.46 737.43 680.39 739.27 680.69 746.91 681.71 749.28 681.64 758.7 681.23 762.43 681.03 764.44 679.85 765.68 678.33 766.29 677.7 768.83 675.76 769.07 675.58 769.14 675.53 772.88 676.55 773.12 676.8 773.32 677 773.75 677.44 782.75 691.22 782.85 691.57 783.4 693.69 783.41 694.06 783.42 694.43 783.39 694.81 783.78 702.05 784.46 711.95 786.23 714.85 788.46 717.57 792.28 726.65 793.11 733.37 793.12 733.7 793.14 735.4 793.17 738.04 792.86 738.97 790.18 741.11 787.76 740.8 787.71 740.73 786.01 738.58 780.77 738.13 773.96 738.69 772.75 739.08 762.55 747.15 762.34 747.46 762.18 747.73 761.94 748.19 761.83 749.84 769.54 755.3 772.43 757.21 777.17 760.22 779.12 761.08 780.21 762.84 780.28 763.2 780.44 767.88 781.74 777.56 781.75 777.66 782.35 779.67 782.48 780.12 786.83 782.35 793.39 787.14 794.06 787.83 794.12 795.98 793.32 799.86 792.12 803.88 789.92 810.58 790.75 821.48 791.7 823.57 792.4 823.72 793.06 823.86 797.67 827.8 798.47 828.75 798.52 828.82 799 829.88 798.35 834.82 798.31 835.05 796.23 838.4 795.06 838.8 769.26 844.95 767.9 845.28 759.93 848.79 757.45 850.97 757.44 850.98 756.8 850.46 756.42 850.15 754.31 848.41 750.96 845.64 749.8 844.68 749.6 844.51 747.74 842.27 746.5 840.76 738.37 833.14 731.46 826.71 731.04 826.44 728.48 824.77 727.09 823.87 722.77 821.12 712.81 823.53 712.66 823.77 712.24 824.42 711.62 825.48 710.17 827.97 710.13 828.03 709.37 829.42 708.98 830.13 708.34 831.29 705.03 837.24 705.03 837.26 695.61 847.87 695.52 847.98 695.46 848.04 692.61 850.74 691.17 852.1 689.05 853.84 687.58 855.03 685.84 856.37 680.44 858.44 681.12 861.88 679.08 862.89 678.61 863.05 678.55 863.07 678.39 863.11 678.24 863.12 677.63 862.91 668.12 859.44 665.02 858.25 664.77 858.12 664.67 858.07 663.17 857.22 660.8 855.83 655.88 857.8 649.39 877.52 648.87 880.76 649.85 883.05 652.58 883.81 655.92 886.28 657.51 889.84 657.37 892.12 656.9 893.21 656.5 894.13 656.42 894.71 656.43 895.21 656.62 895.99 656.84 896.85 659.64 902.37 661.67 905.4 662.13 905.95 662.86 906.26 663.13 906.17 663.15 906.16 666.05 908.61 666.15 908.69 666.16 908.73 666.34 909.36 666.43 909.7 666.44 909.73 666.44 909.82 666.43 910.11 666.11 911.48 666.05 911.71 665.77 912.37 661.06 922.79 659.44 924.51 658.53 924.87 657.32 925.36 654.54 927.57 653.83 939.04 651.02 944.29 645.22 950.28 647.56 967.98 650.47 973.71 651.12 976.27 651.15 976.39 651.15 976.4 643.13 996.1 636.38 1004.5 635.86 1004.8 634.98 1005.28 634.07 1005.39 632.21 1004.77 630.64 1004.23 625.98 1004.09 619.3 1009.63 617.37 1011.44 612.23 1016.58 610.49 1020.52 607.38 1031.19 599.28 1047 599.66 1055.46 599.99 1059.27 600.73 1062.24 601.14 1063.69 601.03 1063.81 599.63 1065.3 597.78 1067.18 591.41 1072.86 591.29 1072.9 585.54 1075.54 577.68 1079.3 576.61 1081.95 576.52 1082.17 576.32 1082.64 570.68 1087.88 570.67 1087.89 569.42 1088.91 569.36 1088.96 567.52 1090.43 559.44 1094.72 551.18 1092.46 547.25 1090.07 539.17 1096.86 536.19 1098.55 532.42 1100.14 531.53 1100.39 531.52 1100.39 531.32 1100.27 531.32 1100.09 531.32 1098.25 530.98 1097.67 530.33 1096.57 526.9 1093.23 524.96 1091.75 517.89 1087.69 515.99 1085.54 513.14 1085.21 503.06 1085.03 499.25 1085.14 494.9 1085.55 492.99 1086.91 492.39 1087.37 490.4 1091.1 483.1 1091.82 479.93 1090.93 474.83 1090.65 468.69 1094.09 469.63 1097.05 470.79 1098.24 471.31 1098.89 471.67 1102.69 459.68 1115.35 458.76 1115.6 447.59 1118.28 444.51 1118.83 444.49 1118.82 443.01 1118.4 442.14 1118.52 441.29 1118.64 437.8 1119.34 434.29 1120.69 434.22 1119.33 432.44 1118.54 432.34 1118.5 431.45 1118.1 431.38 1118.1 431.27 1118.09 427.89 1117.93 422.5 1120.49 422.47 1120.61 422.27 1121.02 421.91 1121.57 421.39 1122.07 421.1 1122.31 420.81 1122.54 420.68 1122.63 420.5 1122.77 420.4 1122.82 420.26 1122.89 419.64 1123.18 419.19 1123.28 418.55 1123.29 418.04 1123.25 417.85 1123.23 417.65 1123.21 417.26 1123.17 416.06 1122.97 415.48 1122.8 415.3 1122.74 412.88 1121.86 412.56 1121.73 412.13 1121.55 408.45 1119.82 407.84 1119.42 407.74 1119.35 407.06 1118.76 403.15 1116.59 394.87 1113.2 392.38 1112.36 391.05 1112 389.65 1111.71 387.91 1111.53 387.21 1111.6 381.14 1112.74 379.63 1113.12 379.04 1113.31 378.72 1113.42 378.48 1113.5 373.98 1115.65 371.09 1117.36 370.43 1117.99 368.43 1120.54 368.01 1121.29 367.79 1121.82 367.65 1122.6 367.61 1123.21 367.59 1123.76 367.78 1125.13 368.68 1129.37 369 1130.44 369.46 1131.88 369.47 1131.91 369.49 1131.96 369.95 1133.15 370.35 1135.46 370.03 1136.89 369.9 1137.47 369.62 1138.72 369.08 1139.82 366.27 1142.48 366.18 1142.56 366.15 1142.58 365.65 1142.89 364.6 1143.36 364.18 1143.52 364.13 1143.54 363.99 1143.59 363.67 1143.69 345.49 1148 344.87 1147.7 343.11 1145.74 342.61 1144.86 342.42 1144.51 341.82 1142.97 341.68 1142.58 341.89 1140.17 333.53 1128.91 327.3 1120.31 323.63 1110.64 314.84 1107.14 304.43 1106.19 302.64 1105.65 292.17 1101.77 291.95 1100.59 291.9 1099.91 291.9 1099.83 291.87 1099.51 291.57 1094.63 288.97 1093.04 283.29 1091.62 282.8 1091.88 282.34 1092.41 280.93 1094.37 279.75 1096.08 278.04 1097.13 274.4 1093.36 273.84 1090.39 272.66 1082.92 272.95 1078.09 271.33 1076.24 268.74 1076.02 267.89 1075.41 267.56 1075.16 259.1 1064.69 250.62 1053.08 245.31 1050.88 242.21 1050.06 239.22 1049.35 237.82 1046.58 234.49 1046.34 227.44 1045.43 223.99 1044.96 222.09 1044.66 219.18 1043.43 216.25 1042.02 209.61 1038.61 206.34 1036.81 203.35 1035.07 200.57 1033.01 198.95 1031.48 204.69 1027.23 204.95 1026.97 205.01 1026.89 205.13 1026.72 205.18 1026.42 205.7 1023.03 205.92 1021.63 206.69 1008.02 205.87 999.15 204.04 995.87 203.92 995.71 203.38 994.97 201.95 994.21 201.88 994.18 200.8 993.61 198.03 990.07 197.9 989.9 197.84 989.6 197.57 988.29 204.34 983.49 211.24 974.73 215.58 963.52 213.9 952.2 211.52 943.57 208.81 940.74 205.34 937.16 204.9 937.4 204.6 937.57 201.75 939.14 200.7 940.54 199.99 940.78 199.98 940.78 199.93 940.8 198.41 941.3 196.33 940.06 189.11 930.89 181.52 914.4 179.76 909.52 175.47 892.66 185.94 875.66 187.8 875.48 187.9 874.88 187.93 874.22 187.96 869.66 187.92 860.74 187.66 858.42 187.59 858.06 187.45 857.22 169.48 846.55 168.06 846.14 161.38 844.47 158.91 844.12 157.1 843.97 155.47 843.84 153.93 844.05 150.96 844.87 149.74 845.35 147.18 846.71 146.69 847.4 146.06 848.39 137.12 846.77 131.24 837.55 127.42 830.59 127.29 830.32 126.89 829.52 127.55 823.34 133.87 818.63 139.2 812.14 134.7 801.61 129.67 797.99 119.32 790.58 118.65 789.95 117.83 788.85 118.35 780.03 118.64 779.35 129.23 766.22 134.11 762.37 138.48 759.29 140.49 757.92 141.74 757.35 145.25 754.43 152.15 747.85 152.94 745.5 139.39 722.84 137.12 722.4 136.37 721.81 135.82 721.12 134.99 719.73 126.69 703.29 125.42 695.27 125.73 693.87 129.42 687.74 130.49 686.49 130.2 683.11 128.98 677.73 130.25 672.7 130.42 672.53 132.33 670.66 142.92 661.45 144.48 661.25 146.87 661 148.82 660.82 149.9 660.81 150.29 661.12 152.6 662.98 153.87 664.34 166.39 660.17 179.71 659.43 180.02 659.42 180.03 659.34 179.86 656.63 179.62 655.99 178.99 655.06 178.44 654.55 171.56 648.17 164.77 638.53 164.03 637.44 163.94 637.3 164.25 636.61 173.47 621.08 176.49 612.08 182.83 598.34 184.58 594.96 184.81 594.69 185.77 593.59 188.91 593 190.55 592.95 191.42 592.94 192.82 593.22 194.23 594.21 196.23 594.55 201.08 593.17 201.61 592.92 212.13 584.45 213.25 575.8 213.31 571.12 213.97 566.19 215.79 563.52 218.48 560.73 220 559.38 221.52 558.73 222.84 556.98 224.36 553.58 225.39 547.63 224.6 546.41 224.86 545.74 223.66 542.78 220.87 539.33 219.52 537.77 213.83 534.79 204.66 531.42 202.84 531.31 202.75 531.33 201.97 531.44 201.57 531.5 201.39 532.01 201.24 532.59 200.56 533.39 199.76 534.09 195.07 536.55 193.91 536.87 187.87 538.07 187.69 538.07 186.66 538.1 185.13 537.79 184.79 537.72 183.6 537.49 173.79 517.97 173.74 517.84 173.21 516.35 175.49 505.64 177.14 498.7 178.21 496.1 179.1 493.15 179.17 492.91 179.21 491.49 175.44 489.07 175.04 489.09 174.2 489.14 174.18 489.14 173.22 489.29 169.66 490.97 169.57 491.04 168.96 491.52 167.13 492.97 167.06 493.02 167.07 493.34 167.15 494.97 167.45 495.16 167.66 495.3 168.02 496.24 167.85 497.1 159.86 501.12 159.7 501.15 159.32 501.01 158.2 500.12 155.32 496.57 153.03 493.66 152.66 487.17 151.92 485.89 142.63 481.01 142.32 481.01 141.74 481.01 140.99 481.43 139.99 482.05 139.17 482.56 138.47 482.96 137.37 483.58 137.16 483.7 137.05 483.77 126.6 486.01 126.49 485.77 126.37 483.91 122.03 477.11 112.91 466.09 107.9 461.06 96.59 453.79 96.1 453.6 91.33 452.19 85.12 448.18 79.15 448.83 79.1 448.73 78.92 448.34 78.01 446.4 76.68 427.55 76.88 424.66 77 424.13 78.42 420.65 78.96 419.66 79.55 416.81 78.52 413.84 76.65 411.9 71.38 408.39 69.09 407.21 67.05 406.95 64.43 405.59 62.84 403.22 63.91 400.62 65.25 399.22 70.73 393.14 72.46 390.07 74.96 386.15 76.56 385.21 76.85 385.04 78.23 385.08 81.34 386.06 88.73 386.04 91.27 385.58 91.31 385.57 92.22 384.47 92.41 384.25 92.38 383.33 92.06 377.83 91.17 377.52 90.14 378.27 89.57 378.69 84.38 376.03 82.71 374.46 82.31 373.02 80.26 364.77 80.11 362.31 80.61 358.8 81.32 358.27 81.53 358.11 82.93 355.52 84.11 351.69 85.32 346.58 81.41 330.47 80.91 329.99 73.79 318.98 72.5 316.64 71.97 311.43 74.36 295.82 76.38 284.63 79.12 283.48 81.1 282.05 93 273.26 92.77 269 88.76 254.9 80.95 247.94 76.98 244.61 79.21 233.41 80.6 227.93 82.06 226.89 83.64 225.38 84.72 223.7 87.78 218.37 87.68 216.7 87.53 213.97 96.71 205.58 98.9 203.62 101.38 202.8 102.39 198.78 103.31 194.86 102.79 191.31 101.78 185.63 100.06 178.86 98.16 172.49 97.09 169.56 94.05 162.06 95.44 154.82 95.46 154.79 95.9 153.75 95.83 153.42 95.73 152.97 95.08 150.37 93.7 146.47 92.84 144.95 87.15 136.66 86.39 135.82 83.74 134.64 83.73 134.71 83.71 134.78 83.76 137.65 82.32 150.47 82.22 150.77 82.16 150.89 81.17 151.78 69.83 153.83 61.24 153.45 50.82 156.81 46.16 157.85 40.31 154.37 39.77 151.68 41.57 149.66 42.41 149.31 43.49 148.52 43.52 148.38 43.6 148.08 38.01 130.17 37.48 128.81 37.41 128.63 33.5 125.42 29.8 114.47 24.69 101.54 22.51 98.4 20.33 95.85 19.73 95.38 19.26 95.3 18.04 95.36 17.53 95.72 16.7 96.88 13.1 97.57 7.37 95.45 1.73 91.17 1.61 90.96 1.22 90.25 1.12 89.76 1.01 89.25 1 88.84 1.1 88.16 1.41 87.86 5.14 84.08 6.18 83.3 29.01 69.26 56.2 51.69 59.03 49.63 59.71 48.66 60.51 47.51 60.68 47.27 60.66 45.67 60.48 44.9 60.33 44.73 59.9 44.24 58.9 39.72 62.51 31.89 69.76 19.68 76.95 20.99 77.47 21.65 78.56 22.45 79.14 22.8 80 23.3 80.56 23.61 80.77 23.68 81.84 23.97 82.02 24.02 82.31 24 85.3 23.19 90.28 9.45 91.35 4.33 96.17 3.35 105.46 1 109.54 2.09 111.01 2.17 116.57 3.4 123.99 6.61 124.31 6.89 124.67 7.27 125.8 8.68 126.2 10.41 126.33 11.56 Z"
          id="세종시"
          style={checkCurrentPlace('세종시')}
        />
      </g>
    </svg>
  )
}
