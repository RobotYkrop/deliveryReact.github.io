import React from "react";
import {Link} from "react-router-dom";
export default class About extends React.Component{
    render()  {
        return (
            <div>
                <div className="u-clearfix u-header u-header" id="sec-3c69"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <a  className="u-image u-logo u-image-1">
                        <Link to={"/"}><svg width="101" height="37" viewBox="0 0 101 37" fill="none" >
                            <path d="M12.2787 6.56271H10.1395V7.6323H12.2787V6.56271Z" fill="black"/>
                            <path d="M12.2787 8.70187H10.1395V9.77146H12.2787V8.70187Z" fill="black"/>
                            <path d="M12.2787 10.841H10.1395V11.9106H12.2787V10.841Z" fill="black"/>
                            <path d="M19.7658 7.0975H18.6962C18.6959 7.38107 18.5831 7.65293 18.3826 7.85344C18.1821 8.05396 17.9102 8.16675 17.6266 8.16709V9.23667C18.1938 9.23603 18.7375 9.01045 19.1386 8.60942C19.5396 8.20839 19.7652 7.66465 19.7658 7.0975Z" fill="black"/>
                            <path d="M22.4398 9.77146V8.70188C22.1563 8.70154 21.8844 8.58875 21.6839 8.38823C21.4834 8.18772 21.3706 7.91586 21.3702 7.63229H20.3007C20.3013 8.19944 20.5269 8.74318 20.9279 9.14421C21.3289 9.54524 21.8727 9.77082 22.4398 9.77146Z" fill="black"/>
                            <path d="M28.0545 33.0505C27.1517 33.2146 26.2308 33.2557 25.3169 33.1728L16.0182 32.3274C15.8687 32.3138 15.7303 32.2431 15.6316 32.13C15.5329 32.0169 15.4816 31.8701 15.4884 31.7202C15.4952 31.5703 15.5595 31.4287 15.6679 31.325C15.7764 31.2212 15.9207 31.1633 16.0707 31.1632H23.2419C23.5965 31.1626 23.9365 31.0214 24.1871 30.7705C24.4378 30.5196 24.5787 30.1796 24.5789 29.8249V29.8124C24.5783 29.5314 24.4871 29.2581 24.3189 29.033L23.0944 27.401C23.0168 27.2972 22.9748 27.1711 22.9745 27.0415V26.9497C22.9745 26.8311 23.0097 26.7152 23.0756 26.6166C23.1414 26.518 23.2351 26.4411 23.3447 26.3957C23.4542 26.3503 23.5748 26.3385 23.6911 26.3616C23.8075 26.3847 23.9143 26.4418 23.9982 26.5257L26.3399 28.8674C26.3896 28.917 26.4485 28.9564 26.5134 28.9833C26.5783 29.0102 26.6478 29.024 26.7181 29.024H32.6008V27.9544H26.9395L24.7546 25.7693C24.6996 25.7145 24.6409 25.6634 24.5789 25.6166V13.515C24.5789 13.3732 24.5225 13.2372 24.4223 13.1369C24.322 13.0366 24.1859 12.9802 24.0441 12.9802H23.5093V11.3759H24.3115C24.8079 11.3759 25.284 11.1787 25.635 10.8276C25.9861 10.4766 26.1833 10.0005 26.1833 9.50409C26.1833 9.00766 25.9861 8.53157 25.635 8.18054C25.284 7.82952 24.8079 7.63231 24.3115 7.63231H24.2562C24.524 7.31148 24.6616 6.90191 24.6421 6.48449C24.6225 6.06708 24.4471 5.67218 24.1505 5.37783C23.8539 5.08347 23.4576 4.91105 23.0401 4.89464C22.6225 4.87823 22.214 5.01902 21.8952 5.28919C21.8446 4.75947 21.5984 4.26763 21.2047 3.9097C20.8109 3.55176 20.2979 3.35343 19.7658 3.35343C19.2336 3.35343 18.7206 3.55176 18.3269 3.9097C17.9331 4.26763 17.6869 4.75947 17.6363 5.28919C17.3175 5.01902 16.909 4.87823 16.4914 4.89464C16.0739 4.91105 15.6777 5.08347 15.3811 5.37783C15.0845 5.67218 14.909 6.06708 14.8895 6.48449C14.8699 6.90191 15.0076 7.31148 15.2753 7.63231H15.22C14.9425 7.63206 14.6684 7.69389 14.4178 7.81327V5.49315C14.4178 4.64213 14.0798 3.82597 13.478 3.22422C12.8763 2.62246 12.0601 2.28439 11.2091 2.28439C10.3581 2.28439 9.54191 2.62246 8.94016 3.22422C8.3384 3.82597 8.00033 4.64213 8.00033 5.49315V12.9802H7.46554C7.32371 12.9802 7.18768 13.0366 7.08739 13.1369C6.98709 13.2372 6.93075 13.3732 6.93075 13.515V15.8666L4.05898 18.3282H0.513245V19.3977H4.25679C4.38444 19.3977 4.50788 19.3521 4.6048 19.269L7.70446 16.6121C8.02312 16.3392 8.42885 16.1891 8.84845 16.189C8.89225 16.189 8.93507 16.202 8.97149 16.2263C9.00791 16.2507 9.03629 16.2853 9.05305 16.3257C9.06981 16.3662 9.07419 16.4107 9.06564 16.4537C9.05709 16.4967 9.03599 16.5361 9.00501 16.5671L7.08738 18.4848C7.01258 18.5596 6.96164 18.6549 6.94101 18.7586C6.92037 18.8624 6.93096 18.9699 6.97144 19.0676C7.01192 19.1653 7.08047 19.2489 7.16842 19.3076C7.25637 19.3664 7.35977 19.3977 7.46554 19.3977H13.0809C13.1518 19.3977 13.2198 19.4259 13.2699 19.4761C13.3201 19.5262 13.3483 19.5942 13.3483 19.6651C13.3483 19.7361 13.3201 19.8041 13.2699 19.8542C13.2198 19.9044 13.1518 19.9325 13.0809 19.9325H9.06992C8.92808 19.9325 8.79206 19.9889 8.69176 20.0892C8.59147 20.1895 8.53513 20.3255 8.53513 20.4673C8.53513 20.6092 8.59147 20.7452 8.69176 20.8455C8.79206 20.9458 8.92808 21.0021 9.06992 21.0021H14.6852C14.7562 21.0021 14.8242 21.0303 14.8743 21.0804C14.9245 21.1306 14.9526 21.1986 14.9526 21.2695C14.9526 21.3404 14.9245 21.4084 14.8743 21.4586C14.8242 21.5087 14.7562 21.5369 14.6852 21.5369H9.06992C8.92808 21.5369 8.79206 21.5933 8.69176 21.6935C8.59147 21.7938 8.53513 21.9299 8.53513 22.0717C8.53513 22.2135 8.59147 22.3496 8.69176 22.4499C8.79206 22.5501 8.92808 22.6065 9.06992 22.6065H13.6157C13.6866 22.6065 13.7546 22.6347 13.8047 22.6848C13.8549 22.735 13.883 22.803 13.883 22.8739C13.883 22.9448 13.8549 23.0128 13.8047 23.063C13.7546 23.1131 13.6866 23.1413 13.6157 23.1413H9.06992C8.92808 23.1413 8.79206 23.1976 8.69176 23.2979C8.59147 23.3982 8.53513 23.5342 8.53513 23.6761C8.53513 23.8179 8.59147 23.9539 8.69176 24.0542C8.79206 24.1545 8.92808 24.2109 9.06992 24.2109H11.7105C11.7187 24.2113 11.7264 24.2147 11.7323 24.2205C11.7381 24.2263 11.7417 24.234 11.7422 24.2422C11.7427 24.2504 11.7401 24.2585 11.735 24.265C11.7299 24.2714 11.7226 24.2758 11.7145 24.2772L8.04218 24.7362L4.40386 23.6967C4.35603 23.683 4.30653 23.6761 4.25679 23.6761H0.513245V24.7457H4.18192L6.93075 25.5311V30.6284H6.93202C6.93151 30.6986 6.94496 30.7683 6.97158 30.8333C6.9982 30.8984 7.03745 30.9575 7.08708 31.0072C7.13671 31.0569 7.19571 31.0963 7.26068 31.1231C7.32564 31.1499 7.39528 31.1635 7.46554 31.1632H14.5248C14.4348 31.4014 14.4011 31.6573 14.4263 31.9107C14.4515 32.1642 14.535 32.4084 14.6702 32.6242C14.8055 32.8401 14.9887 33.0217 15.2058 33.155C15.4228 33.2883 15.6677 33.3696 15.9214 33.3926L25.22 34.2382C25.5584 34.2691 25.8973 34.2845 26.2367 34.2844C26.9105 34.2844 27.5829 34.2238 28.2458 34.1033L32.6964 33.294L32.5051 32.2417L28.0545 33.0505ZM13.3483 10.8411C13.3484 10.6993 13.4048 10.5633 13.5051 10.4631C13.6053 10.3628 13.7413 10.3064 13.883 10.3063H14.9526C15.5198 10.3069 16.0635 10.5325 16.4645 10.9335C16.8656 11.3346 17.0912 11.8783 17.0918 12.4454C17.0916 12.5872 17.0352 12.7232 16.935 12.8234C16.8347 12.9237 16.6988 12.9801 16.557 12.9802H15.4874C14.9203 12.9796 14.3765 12.754 13.9755 12.353C13.5745 11.952 13.3489 11.4082 13.3483 10.8411ZM15.22 8.7019H16.557C16.6628 8.7019 16.7662 8.67054 16.8541 8.61178C16.9421 8.55301 17.0106 8.46949 17.0511 8.37176C17.0916 8.27404 17.1022 8.16651 17.0815 8.06277C17.0609 7.95903 17.01 7.86373 16.9352 7.78894L16.133 6.98675C16.0773 6.93107 16.0331 6.86496 16.003 6.79221C15.9729 6.71946 15.9573 6.64148 15.9573 6.56273C15.9573 6.48398 15.9729 6.406 16.003 6.33325C16.0331 6.2605 16.0773 6.19439 16.133 6.13871C16.1887 6.08302 16.2548 6.03885 16.3275 6.00872C16.4003 5.97858 16.4783 5.96307 16.557 5.96307C16.6358 5.96307 16.7137 5.97858 16.7865 6.00872C16.8592 6.03885 16.9253 6.08302 16.981 6.13871L17.7832 6.94089C17.858 7.01569 17.9533 7.06663 18.057 7.08726C18.1608 7.1079 18.2683 7.09731 18.366 7.05683C18.4638 7.01635 18.5473 6.9478 18.6061 6.85985C18.6648 6.7719 18.6962 6.6685 18.6962 6.56273V5.49315C18.6962 5.20947 18.8089 4.93742 19.0094 4.73684C19.21 4.53625 19.4821 4.42356 19.7658 4.42356C20.0494 4.42356 20.3215 4.53625 20.5221 4.73684C20.7227 4.93742 20.8353 5.20947 20.8353 5.49315V6.56273C20.8353 6.6685 20.8667 6.7719 20.9255 6.85985C20.9842 6.9478 21.0678 7.01635 21.1655 7.05683C21.2632 7.09731 21.3707 7.1079 21.4745 7.08726C21.5782 7.06663 21.6735 7.01569 21.7483 6.94089L22.5505 6.13871C22.6062 6.08302 22.6723 6.03885 22.745 6.00872C22.8178 5.97858 22.8958 5.96307 22.9745 5.96307C23.0533 5.96307 23.1312 5.97858 23.204 6.00872C23.2767 6.03885 23.3428 6.08302 23.3985 6.13871C23.4542 6.19439 23.4984 6.2605 23.5285 6.33325C23.5587 6.406 23.5742 6.48398 23.5742 6.56273C23.5742 6.64148 23.5587 6.71946 23.5285 6.79221C23.4984 6.86496 23.4542 6.93107 23.3985 6.98675L22.5963 7.78894C22.5215 7.86373 22.4706 7.95903 22.45 8.06277C22.4293 8.16651 22.4399 8.27404 22.4804 8.37176C22.5209 8.46949 22.5894 8.55301 22.6774 8.61178C22.7653 8.67054 22.8687 8.7019 22.9745 8.7019H24.3115C24.5242 8.7019 24.7283 8.78641 24.8787 8.93685C25.0292 9.08729 25.1137 9.29133 25.1137 9.50409C25.1137 9.71684 25.0292 9.92088 24.8787 10.0713C24.7283 10.2218 24.5242 10.3063 24.3115 10.3063H22.9745C22.8327 10.3063 22.6966 10.3626 22.5964 10.4629C22.4961 10.5632 22.4397 10.6992 22.4397 10.8411V11.1259C21.8157 10.5655 20.9967 10.2723 20.1588 10.3094C19.3208 10.3466 18.531 10.711 17.959 11.3245C17.7298 10.7119 17.3192 10.1839 16.782 9.81081C16.2448 9.43776 15.6066 9.23747 14.9526 9.23669H14.4646C14.52 9.08049 14.6223 8.94524 14.7575 8.84949C14.8928 8.75374 15.0543 8.70218 15.22 8.7019ZM22.372 12.9802H18.2291C18.3475 12.5209 18.6153 12.1139 18.9903 11.8233C19.3652 11.5327 19.8262 11.375 20.3006 11.375C20.7749 11.375 21.2359 11.5327 21.6108 11.8233C21.9858 12.1139 22.2536 12.5209 22.372 12.9802ZM9.06992 5.49315C9.06992 4.9258 9.29529 4.3817 9.69647 3.98053C10.0976 3.57935 10.6417 3.35398 11.2091 3.35398C11.7764 3.35398 12.3205 3.57935 12.7217 3.98053C13.1229 4.3817 13.3483 4.9258 13.3483 5.49315V9.32867C13.0357 9.43958 12.7651 9.64448 12.5736 9.91525C12.3821 10.186 12.2791 10.5094 12.2787 10.8411C12.2781 11.6309 12.5701 12.393 13.0983 12.9802H9.06992V5.49315ZM10.1395 14.0498H11.2091V18.3282H10.1395V14.0498ZM8.84845 15.1194C8.56074 15.1195 8.27474 15.1636 8.00033 15.25V14.0498H9.06992V15.1398C8.99682 15.1267 8.92272 15.1198 8.84845 15.1194ZM9.06992 18.0149V18.3282H8.7566L9.06992 18.0149ZM10.1395 25.552L11.2091 25.4183V29.3372L10.1395 28.2676V25.552ZM8.06665 25.8111L9.06992 25.6857V28.2677L8.00033 29.3373V25.8152C8.0225 25.8152 8.04465 25.8138 8.06665 25.8111ZM8.7566 30.0936L9.60471 29.2455L10.4528 30.0936H8.7566ZM12.2787 25.1879C12.4415 25.09 12.5763 24.9516 12.67 24.7863C12.7637 24.6209 12.8131 24.4342 12.8135 24.2442C12.8135 24.233 12.8135 24.2219 12.8129 24.2107H13.6157C13.8157 24.2106 14.0131 24.1657 14.1935 24.0792C14.3738 23.9927 14.5325 23.8668 14.6578 23.7109C14.7831 23.5549 14.8718 23.3729 14.9174 23.1781C14.963 22.9834 14.9643 22.7809 14.9213 22.5855C15.2502 22.5265 15.545 22.3466 15.7478 22.0811C15.9506 21.8156 16.0467 21.4838 16.0171 21.151C15.9875 20.8182 15.8343 20.5086 15.5878 20.2831C15.3413 20.0576 15.0193 19.9325 14.6852 19.9325H14.3911C14.4306 19.7383 14.4264 19.5377 14.3789 19.3452C14.3313 19.1528 14.2416 18.9733 14.1162 18.8198C13.9909 18.6663 13.8329 18.5425 13.6539 18.4575C13.4748 18.3725 13.2791 18.3283 13.0809 18.3282H12.2787V14.0498H23.5093V25.2821C23.0784 25.2994 22.6708 25.4825 22.3718 25.7933C22.0728 26.1041 21.9055 26.5185 21.9049 26.9497V27.0415C21.9057 27.4026 22.0229 27.7538 22.2392 28.0431L23.4636 29.6748C23.4933 29.7146 23.5094 29.7628 23.5095 29.8124V29.8249C23.5096 29.896 23.4815 29.9642 23.4313 30.0146C23.3811 30.065 23.313 30.0934 23.2419 30.0936H12.2787V25.1879Z" fill="black"/>
                            <path d="M45.2378 14.2844V3.62033H48.248C49.1758 3.62033 49.9961 3.82541 50.709 4.23557C51.4219 4.64572 51.9712 5.22922 52.3569 5.98605C52.7476 6.74289 52.9453 7.61203 52.9502 8.59348V9.27463C52.9502 10.2805 52.7549 11.1618 52.3643 11.9187C51.9785 12.6755 51.4243 13.2566 50.7017 13.6618C49.9839 14.0671 49.1465 14.2746 48.1895 14.2844H45.2378ZM46.644 4.77756V13.1345H48.1235C49.2075 13.1345 50.0498 12.7976 50.6504 12.1237C51.2559 11.4499 51.5586 10.4904 51.5586 9.24533V8.62277C51.5586 7.41183 51.2729 6.47189 50.7017 5.80295C50.1353 5.12912 49.3296 4.78732 48.2847 4.77756H46.644ZM58.1577 14.4309C57.0835 14.4309 56.2095 14.0793 55.5356 13.3762C54.8618 12.6682 54.5249 11.7234 54.5249 10.5417V10.2927C54.5249 9.50656 54.6738 8.80588 54.9717 8.19064C55.2744 7.57053 55.6943 7.08713 56.2314 6.74045C56.7734 6.38889 57.3594 6.2131 57.9893 6.2131C59.0195 6.2131 59.8203 6.55246 60.3916 7.23117C60.9629 7.90988 61.2485 8.88156 61.2485 10.1462V10.7102H55.8799C55.8994 11.4914 56.1265 12.1237 56.561 12.6071C57.0005 13.0857 57.5571 13.3249 58.231 13.3249C58.7095 13.3249 59.1147 13.2273 59.4468 13.032C59.7788 12.8366 60.0693 12.5779 60.3184 12.2556L61.146 12.9001C60.4819 13.9206 59.4858 14.4309 58.1577 14.4309ZM57.9893 7.32639C57.4424 7.32639 56.9834 7.52658 56.6123 7.92697C56.2412 8.32248 56.0117 8.87912 55.9238 9.59689H59.8936V9.49435C59.8545 8.80588 59.6689 8.27365 59.3369 7.89767C59.0049 7.51682 58.5557 7.32639 57.9893 7.32639ZM64.2954 14.2844H62.9404V3.03439H64.2954V14.2844ZM67.9429 14.2844H66.5879V6.35959H67.9429V14.2844ZM66.478 4.25754C66.478 4.03781 66.5439 3.85226 66.6758 3.7009C66.8125 3.54953 67.0127 3.47385 67.2764 3.47385C67.54 3.47385 67.7402 3.54953 67.877 3.7009C68.0137 3.85226 68.082 4.03781 68.082 4.25754C68.082 4.47726 68.0137 4.66037 67.877 4.80685C67.7402 4.95334 67.54 5.02658 67.2764 5.02658C67.0127 5.02658 66.8125 4.95334 66.6758 4.80685C66.5439 4.66037 66.478 4.47726 66.478 4.25754ZM72.7329 12.446L74.6958 6.35959H76.0801L73.2383 14.2844H72.2056L69.3345 6.35959H70.7188L72.7329 12.446ZM80.5698 14.4309C79.4956 14.4309 78.6216 14.0793 77.9478 13.3762C77.2739 12.6682 76.937 11.7234 76.937 10.5417V10.2927C76.937 9.50656 77.0859 8.80588 77.3838 8.19064C77.6865 7.57053 78.1064 7.08713 78.6436 6.74045C79.1855 6.38889 79.7715 6.2131 80.4014 6.2131C81.4316 6.2131 82.2324 6.55246 82.8037 7.23117C83.375 7.90988 83.6606 8.88156 83.6606 10.1462V10.7102H78.292C78.3115 11.4914 78.5386 12.1237 78.9731 12.6071C79.4126 13.0857 79.9692 13.3249 80.6431 13.3249C81.1216 13.3249 81.5269 13.2273 81.8589 13.032C82.1909 12.8366 82.4814 12.5779 82.7305 12.2556L83.5581 12.9001C82.894 13.9206 81.8979 14.4309 80.5698 14.4309ZM80.4014 7.32639C79.8545 7.32639 79.3955 7.52658 79.0244 7.92697C78.6533 8.32248 78.4238 8.87912 78.3359 9.59689H82.3057V9.49435C82.2666 8.80588 82.0811 8.27365 81.749 7.89767C81.417 7.51682 80.9678 7.32639 80.4014 7.32639ZM89.0659 7.57541C88.8608 7.54123 88.6387 7.52414 88.3994 7.52414C87.5107 7.52414 86.9077 7.90256 86.5903 8.65939V14.2844H85.2354V6.35959H86.5537L86.5757 7.27512C87.02 6.56711 87.6499 6.2131 88.4653 6.2131C88.729 6.2131 88.9292 6.24728 89.0659 6.31564V7.57541ZM93.043 12.2995L94.8887 6.35959H96.3389L93.1528 15.5075C92.6597 16.8259 91.876 17.4851 90.8018 17.4851L90.5454 17.4631L90.04 17.3679V16.2693L90.4062 16.2986C90.8652 16.2986 91.2217 16.2058 91.4756 16.0202C91.7344 15.8347 91.9468 15.4953 92.1128 15.0022L92.4131 14.1965L89.5859 6.35959H91.0654L93.043 12.2995ZM51.1191 27.5749H46.644V32.2844H45.2378V21.6203H51.8442V22.7776H46.644V26.425H51.1191V27.5749ZM52.7964 28.2487C52.7964 27.4724 52.9478 26.7741 53.2505 26.154C53.5581 25.5339 53.9829 25.0554 54.5249 24.7185C55.0718 24.3816 55.6943 24.2131 56.3926 24.2131C57.4717 24.2131 58.3433 24.5866 59.0073 25.3337C59.6763 26.0808 60.0107 27.0744 60.0107 28.3147V28.4099C60.0107 29.1814 59.8618 29.8747 59.564 30.49C59.271 31.1003 58.8486 31.5764 58.2969 31.9182C57.75 32.26 57.1201 32.4309 56.4072 32.4309C55.333 32.4309 54.4614 32.0573 53.7925 31.3103C53.1284 30.5632 52.7964 29.5744 52.7964 28.344V28.2487ZM54.1587 28.4099C54.1587 29.2888 54.3613 29.9944 54.7666 30.5266C55.1768 31.0588 55.7236 31.3249 56.4072 31.3249C57.0957 31.3249 57.6426 31.0564 58.0479 30.5193C58.4531 29.9773 58.6558 29.2204 58.6558 28.2487C58.6558 27.3796 58.4482 26.6765 58.0332 26.1394C57.623 25.5974 57.0762 25.3264 56.3926 25.3264C55.7236 25.3264 55.1841 25.5925 54.7739 26.1247C54.3638 26.657 54.1587 27.4187 54.1587 28.4099ZM61.3511 28.2487C61.3511 27.4724 61.5024 26.7741 61.8052 26.154C62.1128 25.5339 62.5376 25.0554 63.0796 24.7185C63.6265 24.3816 64.249 24.2131 64.9473 24.2131C66.0264 24.2131 66.8979 24.5866 67.562 25.3337C68.231 26.0808 68.5654 27.0744 68.5654 28.3147V28.4099C68.5654 29.1814 68.4165 29.8747 68.1187 30.49C67.8257 31.1003 67.4033 31.5764 66.8516 31.9182C66.3047 32.26 65.6748 32.4309 64.9619 32.4309C63.8877 32.4309 63.0161 32.0573 62.3472 31.3103C61.6831 30.5632 61.3511 29.5744 61.3511 28.344V28.2487ZM62.7134 28.4099C62.7134 29.2888 62.916 29.9944 63.3213 30.5266C63.7314 31.0588 64.2783 31.3249 64.9619 31.3249C65.6504 31.3249 66.1973 31.0564 66.6025 30.5193C67.0078 29.9773 67.2104 29.2204 67.2104 28.2487C67.2104 27.3796 67.0029 26.6765 66.5879 26.1394C66.1777 25.5974 65.6309 25.3264 64.9473 25.3264C64.2783 25.3264 63.7388 25.5925 63.3286 26.1247C62.9185 26.657 62.7134 27.4187 62.7134 28.4099ZM69.9351 28.2561C69.9351 27.0403 70.2231 26.0637 70.7993 25.3264C71.3755 24.5842 72.1299 24.2131 73.0625 24.2131C73.9902 24.2131 74.7251 24.5305 75.2671 25.1653V21.0344H76.6221V32.2844H75.377L75.311 31.4348C74.769 32.0988 74.0146 32.4309 73.0479 32.4309C72.1299 32.4309 71.3804 32.0549 70.7993 31.3029C70.2231 30.551 69.9351 29.5695 69.9351 28.3586V28.2561ZM71.29 28.4099C71.29 29.3083 71.4756 30.0114 71.8467 30.5193C72.2178 31.0271 72.7305 31.281 73.3848 31.281C74.2441 31.281 74.8716 30.8952 75.2671 30.1237V26.4836C74.8618 25.7365 74.2393 25.363 73.3994 25.363C72.7354 25.363 72.2178 25.6194 71.8467 26.132C71.4756 26.6447 71.29 27.404 71.29 28.4099Z" fill="black"/>
                        </svg></Link>
                    </a>
                    <div className="u-menu u-menu-1">
                        <div className="u-nav-container">
                            <ul className="u-nav u-unstyled u-nav-1"><li className="u-nav-item" ><Link to={"/"}><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" >Главная</a></Link>
                            </li>
                                <li className="u-nav-item"><Link to={"/Back"}><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base">Обратная связь</a></Link>
                                </li></ul>
                        </div>
                    </div>
                </div></div>
                <div className="u-align-center u-clearfix u-section-1">
                            <h2 className={"AboutH2"}>О нас</h2>
                            <p className={"AboutP"} >Мы невроятно динамичны и быстро развиваемся и мы рады вашим замечаниям и предложениям.</p>
                    </div>

                <div className="u-align-center u-clearfix u-footer u-grey-80 u-footer">
                    <p className="u-small-text u-text u-text-variant u-text-1">Помогите сделать наш сервис лучше!</p>
                </div>
            </div>
        );
    };
};