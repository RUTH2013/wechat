;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wenda" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M596.540953 589.92272l27.061332 46.176692c22.269189-30.644951 33.412994-69.845765 33.412994-117.617791 0-35.234479-6.072299-65.804728-18.20871-91.718935-12.146645-25.907043-28.801976-45.74895-49.969065-59.517535-21.172205-13.768585-46.567595-20.653389-76.172867-20.653389-23.692608 0-44.569078 3.927449-62.626339 11.769045-18.065448 7.848759-33.388435 19.61985-45.971008 35.311227-12.589736 15.69854-21.985734 34.421974-28.205389 56.186673-6.217608 21.763676-9.326413 46.712905-9.326413 74.840522 0 33.755802 6.288217 63.069431 18.875906 87.942935 12.58155 24.873504 29.460985 43.972491 50.634214 57.296961 21.167089 13.32447 46.414099 19.986193 75.729775 19.986193 38.727023 0 70.244854-11.381212 94.557586-34.130332l-31.238468-53.306066L596.540953 589.92272z"  ></path>' +
    '' +
    '<path d="M511.998465 63.35391c-251.114225 0-454.68155 203.568349-454.68155 454.682573 0 251.114225 203.568349 454.683597 454.68155 454.683597 251.115248 0 454.682573-203.569372 454.682573-454.683597C966.681038 266.922259 763.11269 63.35391 511.998465 63.35391zM690.55107 635.294071c-9.833973 19.138896-22.556739 35.792181-38.118156 49.998741l37.474496 63.946404-21.445428 12.567223-35.69599-60.908208c-4.952802 3.411703-10.105149 6.650467-15.501042 9.6815-32.423457 18.209734-67.589374 27.315112-105.488543 27.315112-39.08518 0-74.473155-9.397021-106.153692-28.205389-31.688723-18.800181-55.742559-44.859697-72.176856-78.172407-16.434298-33.31271-24.650423-69.213361-24.650423-107.708094 0-42.639123 7.550976-80.684624 22.652929-114.149806 15.10093-33.456996 37.898145-60.405765 68.399833-80.837096 30.494525-20.431332 67.957765-30.646997 112.372324-30.646997 29.606295 0 56.922431 5.329379 81.947384 15.990183 25.018813 10.659781 46.485731 25.538653 64.404846 44.63764 17.911952 19.098987 31.826869 42.34748 41.751916 69.733201 9.91686 27.392884 14.877849 57.519018 14.877849 90.38659C715.201493 564.526307 706.985368 603.314729 690.55107 635.294071z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-110" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M807.206 157.003v123.409h-243.599v-123.409h-124.326v123.409h-243.706v-123.409h-123.92v797.668h858.266v-797.668h-122.723z"  ></path>' +
    '' +
    '<path d="M254.411 96.4h123.92v123.92h-123.92v-123.92z"  ></path>' +
    '' +
    '<path d="M621.771 96.4h123.92v123.92h-123.92v-123.92z"  ></path>' +
    '' +
    '<path d="M254.411 464.367h491.282v62.586h-491.282v-62.586z"  ></path>' +
    '' +
    '<path d="M254.411 585.854h491.282v62.53h-491.282v-62.53z"  ></path>' +
    '' +
    '<path d="M254.411 707.227h491.282v62.53h-491.282v-62.53z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gerenshezhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M556.113195 699.521884c0.803295-67.158562 31.55467-119.173217 85.475743-158.542876-15.858176-11.874445-19.811208-28.010961-17.892509-46.104037 0.801249-7.55507 2.305509-15.121396 4.38896-22.427802 1.182942-4.142343 3.606131-8.271384 6.459109-11.546987 64.777329-74.296123 98.205673-159.316495 86.775342-258.848373-5.384637-46.88175-24.988114-87.536682-61.220317-118.948089-32.232099-27.943422-70.343091-41.932018-112.50433-44.756343-56.759725-3.802606-108.35994 9.739828-150.791331 49.360198-39.45357 36.835953-56.396451 84.20582-58.149375 136.874367-3.041266 91.456968 29.128411 170.151261 89.946568 237.733473 1.585101 1.760087 3.561106 3.445472 4.41352 5.544273 14.754029 36.346813 1.00284 66.920132-30.621415 77.955466-46.542013 16.236799-91.197048 36.859489-133.325541 62.630433-27.016307 16.523325-52.359508 35.105542-73.336262 59.219753-29.78128 34.234709-24.772196 66.223261-23.863501 76.213799 2.440585 26.846438 9.013281 43.026956 27.033703 58.246589 17.077957 14.423501 37.058011 23.456225 57.96825 30.562063 48.340985 16.423041 98.55769 22.909779 149.1039 26.977421 68.727291 5.529947 137.576355 5.719258 206.441792 2.907213 8.402367-0.344854 16.787338-1.113357 26.52512-1.77646C584.815911 819.453371 555.3099 766.738775 556.113195 699.521884zM911.008065 685.884282c0-13.642718-6.985088-20.09978-20.971637-19.524682-4.51892 0.185218-9.05933 0.215918-13.580297 0.075725-7.274684-0.224104-10.93812-5.119601-13.608949-11.06501-2.682086-5.976108-1.073448-11.246135 3.124154-15.835663 3.711532-4.055362 7.78429-7.779174 11.446703-11.873422 6.082532-6.798846 7.261381-14.665001 1.598404-20.761859-9.739828-10.484795-19.942191-20.655436-30.859845-29.887704-7.635911-6.461155-16.134469-4.835122-23.127743 2.326998-2.00568 2.049682-3.791349 4.327562-5.89629 6.262634-8.098445 7.450692-17.609053 8.758478-26.932396 3.123131-2.117221-1.278109-3.937682-4.527107-4.221138-7.05672-0.724501-6.389524-0.093121-12.927427-0.740874-19.330254-1.166569-11.474332-4.821819-15.522532-16.234753-16.086373-13.592576-0.671289-27.245528-0.201591-40.871873-0.090051-7.80578 0.068562-11.644201 4.498454-12.586666 11.977799-0.955768 7.573489-1.731434 15.199167-3.270487 22.660092-0.599657 2.90926-2.455935 6.245238-4.787026 7.992021-8.194636 6.142907-14.104229 5.870708-22.073738-0.423649-3.555989-2.808976-6.770194-6.048763-10.101055-9.133008-7.756661-7.192819-18.796088-7.426133-26.437116-0.198521-8.512884 8.051373-16.876366 16.266475-25.125237 24.585955-7.785314 7.851828-7.940856 13.944594-0.73985 22.592554 4.435009 5.328355 9.121751 10.443863 13.659091 15.687284 5.030573 5.815449 2.192945 11.670807-0.019443 17.485233-1.992377 5.239328-6.228865 6.850012-11.403724 6.963599-6.447852 0.143263-12.950963-0.112564-19.333324 0.645706-10.339486 1.223874-16.087397 7.226588-16.489556 17.496489-0.449231 11.458983-0.471744 22.967084-0.008186 34.42709 0.436952 10.842952 7.626701 17.36039 18.653849 17.724687 6.210445 0.203638 12.496615-0.447185 18.624173 0.308015 2.952238 0.36225 6.690376 2.410909 8.216125 4.854565 6.992251 11.206226 4.720511 19.891026-6.785543 29.091572-12.749372 10.199293-13.409404 19.739577-1.991354 31.272237 7.234775 7.306406 14.532995 14.560624 22.024619 21.603017 8.494465 7.981788 18.189268 8.15268 27.036773 0.569982 3.804652-3.2623 7.312546-6.884804 10.833743-10.463306 3.944845-4.00829 8.315386-4.952802 13.713326-3.133364 10.354835 3.495614 13.245675 7.111978 13.930267 18.174941 0.382717 6.176676 0.328481 12.475126 1.635243 18.46863 1.502213 6.9022 5.722328 11.147898 13.836123 10.437723 6.646374-0.580215 13.382798-0.11768 20.080338-0.11768 6.217608 0 12.435217 0.00307 18.653849 0 11.599176-0.01228 16.856923-4.965082 17.501606-16.71059 0.157589-2.848884-0.156566-5.727445-0.327458-8.590656-0.706081-11.831466 3.793396-18.424628 14.781658-22.379707 4.327562-1.556449 7.413853-1.073448 10.773368 2.393513 4.63967 4.783956 9.753131 9.215896 15.136745 13.148461 8.768711 6.402827 15.878642 5.938246 23.867594-1.503237 8.569166-7.983835 16.95209-16.191774 25.071002-24.635073 7.748475-8.054443 7.68503-15.797801 0.264013-24.103978-3.65832-4.096295-7.826246-7.753591-11.328-11.973706-5.350868-6.459109-5.430686-15.84385 1.101077-20.947078 4.337795-3.387144 10.685363-5.519714 16.228613-5.728468 8.457626-0.316202 15.809057-2.225691 22.943548-6.702656 3.672646-2.302439 5.350868-4.480035 5.225001-8.936533C910.789077 709.328227 911.008065 697.605232 911.008065 685.884282zM752.593102 754.680135c-28.142967-0.069585-48.070832-19.379373-48.189535-46.707788-0.113587-26.106588 21.22951-46.026266 49.234331-45.952588 21.770839 0.056282 44.794206 22.115694 45.053102 43.159986C799.041994 733.866087 779.595083 754.74972 752.593102 754.680135z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghuguanli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M138.37312 676.78208c79.22176-27.08992 121.49248-41.00096 137.0624-45.07648 15.744-4.13184 29.16352-9.79968 39.88992-16.84992l0.86016-0.55296 0.8704-0.53248c11.30496-6.90176 16.62464-11.74016 18.80576-14.00832 1.05984-1.12128 1.78688-1.97632 2.26816-2.60096a58.08128 58.08128 0 0 1-4.44928-18.80064 89.36448 89.36448 0 0 1 0.01536-10.40896 411.77088 411.77088 0 0 0-17.4336-14.99648l-0.59904-0.49664-0.57856-0.49152c-11.32544-9.7024-20.5824-22.05184-28.26752-37.74464-4.29056-8.77056-8.25856-17.9456-12.50304-28.89728l-0.49664-1.30048-0.44544-1.32608c-0.80896-2.41664-1.63328-4.9152-2.48832-7.51104l-0.45568-0.34304-0.88064-0.71168c-7.41888-5.99552-14.6688-13.60384-22.15936-23.24992-8.91904-11.49952-15.72352-25.35936-21.4016-43.61728l-0.1024-0.31744-0.1024-0.32256c-5.5552-18.58048-7.3216-36.44416-5.25312-53.12 1.52576-13.58336 4.35712-25.51296 8.64256-36.3776a115.75296 115.75296 0 0 1 7.63392-16.78336c0.24576-21.38112 1.75616-42.25024 4.5056-62.2592 2.49344-20.59264 7.02976-42.752 13.47072-65.94048a162.47296 162.47296 0 0 0-8.64256-0.24576c-10.72128 0-21.71392 1.08032-32.97792 2.8416a161.5616 161.5616 0 0 0-33.664 9.74848c-11.13088 4.60288-22.12352 10.96704-32.98304 19.09248-10.84928 8.12544-20.62336 18.41664-29.45024 30.86336-9.23136 13.27104-16.29184 28.29824-21.17632 44.94848-4.8896 16.65024-8.27904 32.3584-10.04544 47.11936-2.44224 17.59744-3.25632 35.2-2.85184 52.66432-3.79392 4.736-6.65088 9.47712-8.41216 14.6176-1.89952 4.60288-3.1232 10.01984-3.79904 16.24576-0.80896 6.23616 0 13.40416 2.304 21.12 2.44224 7.84896 5.16096 13.80864 8.41216 18.01216 3.26656 4.18816 6.25664 7.44448 9.09312 9.74336a29.91104 29.91104 0 0 0 9.7792 4.87424c2.304 7.31648 4.608 14.4896 6.92224 21.39648 2.26816 5.97504 4.8128 11.84256 7.6032 17.60256 2.85184 5.82144 5.96992 10.2912 9.76896 13.54752a349.0304 349.0304 0 0 1 21.18144 18.67776c6.24128 5.95456 9.76384 14.48448 10.71616 25.58976 0.40448 7.03488 0.68096 13.5424 0.68096 19.49696a49.46432 49.46432 0 0 1-3.1232 17.33632c-2.02752 5.55008-5.83168 11.10016-11.12576 16.65024-5.29408 5.56032-12.75904 11.38176-22.53312 17.33632-11.93984 7.84384-25.92256 13.80352-41.93792 18.01216-11.52512 3.02592-50.89792 16.28672-77.68576 25.3952v172.92288c1.24416 0.20992 2.50368 0.4096 3.79392 0.61952 1.01376-10.0096 2.7648-21.21728 5.12512-36.27008l0.68608-4.36736 0.0512-0.31232 0.04608-0.31232c8.02816-48.06144 31.89248-75.62752 50.41664-90.21952 20.5312-16.24064 44.70784-29.10208 71.8592-38.2208l5.56032-1.88928zM980.08576 649.56416c-13.58336-3.3792-26.32704-7.43936-37.86752-12.04736-12.49792-5.15584-22.53312-10.83904-29.86496-17.34144-7.46496-6.50752-12.7488-13.40416-16.01024-20.44416-3.25632-7.04-5.16096-14.35136-5.5552-21.39136-0.41984-7.17312 0-14.20288 1.35168-21.12 0.78848-4.89472 2.22208-9.6768 4.20352-14.21312a33.09568 33.09568 0 0 1 6.92224-10.01984c2.87232-2.69824 5.97504-5.42208 9.76896-7.84896a107.04384 107.04384 0 0 0 11.80672-9.33376c3.67616-3.2512 6.94784-7.72096 10.05056-13.5424a195.8912 195.8912 0 0 0 7.87456-17.60256c2.304-6.76864 4.47488-14.08 6.2464-21.39136 4.608-1.36192 8.94976-3.79392 13.16352-7.58272 3.66592-3.2512 6.92224-7.72096 10.04544-13.5424 2.8416-5.82656 5.16096-13.40416 6.51264-23.15264 0.96256-7.44448 0.80896-13.5424-0.27136-18.67776a45.43488 45.43488 0 0 0-4.48512-12.46208c-1.76128-3.78368-4.33664-6.63552-7.59808-8.39168a316.11904 316.11904 0 0 0-3.52768-55.3728c-2.16576-15.70304-6.24128-32.35328-12.07296-50.08896a160.06656 160.06656 0 0 0-26.0608-48.74752c-5.15584-6.49728-11.82208-12.86144-20.22912-19.08736-8.1408-6.23104-17.77664-11.78624-28.37504-16.93184-10.71104-5.1456-22.1184-9.20576-34.31936-12.45696-12.22144-3.24608-25.24672-4.87424-38.54336-4.87424-5.6064 0-11.26912 0.3072-17.01888 0.83968 6.28736 21.41184 10.72128 41.51808 13.42976 60.99456 3.1232 20.52096 4.95104 41.22112 5.44256 61.97248 1.45408 2.36032 2.81088 4.80768 4.06528 7.3472a123.54048 123.54048 0 0 1 11.29984 31.78496c2.92352 13.89056 3.31264 28.78464 1.1776 45.53216l-0.04608 0.3328-0.05632 0.32768c-2.61632 18.80576-7.48032 35.57376-14.45376 49.82784l-0.49664 0.98816-0.512 0.96256c-7.72608 14.4128-16.45056 25.84576-26.67008 34.93888-2.30912 2.06336-4.65408 4.01408-7.0656 5.85216-0.91648 2.8928-1.85856 5.7856-2.85696 8.68352l-0.39936 1.16736-0.44544 1.152a341.59104 341.59104 0 0 1-13.11232 29.34272l-0.36864 0.74752-0.39424 0.74752c-7.72096 14.40256-16.43008 25.80992-26.61888 34.88256a212.13696 212.13696 0 0 1-14.40256 11.89888c0.35328 6.41024 0.57856 12.3904 0.57856 17.87904a49.6128 49.6128 0 0 1-3.11808 17.3312 36.85888 36.85888 0 0 1-2.49344 5.32992c0.512 0.48128 1.04448 0.97792 1.64864 1.5104l0.22016 0.1792 0.2048 0.18944c2.59072 2.29376 9.10336 7.04 23.808 13.12256 13.29664 5.28384 28.08832 9.97376 43.99104 13.94176l0.2048 0.05632 0.20992 0.0512c9.26208 2.38592 23.20384 7.42912 44.71808 15.98976h1.37728c0.48128 0.36864 0.93696 0.74752 1.38752 1.11616 12.63104 5.03296 27.7504 11.23328 45.91616 18.73408 10.65984 4.39808 20.72576 8.56576 25.00608 10.20928 22.51264 8.69888 42.92096 19.73248 60.63616 32.80896l1.57184 1.152 1.47456 1.24928c21.88288 18.44736 37.56544 40.96 46.63808 66.91328l0.11264 0.37888 0.13312 0.37376c4.5568 13.62944 7.82848 29.97248 9.76384 48.57856 2.10432 7.41376 2.52416 14.17728 2.61632 20.42368 0.95744-0.16384 1.87904-0.34304 2.816-0.53248v-183.36768c-17.68448-7.18848-35.96288-14.4384-43.0848-16.27648z" fill="" ></path>' +
    '' +
    '<path d="M951.1168 799.6416c-5.78048-16.55808-15.46752-29.76256-28.71808-40.92928-13.60896-10.05056-29.2864-18.42176-46.62784-25.11872-17.35168-6.70208-92.89728-39.07072-111.7184-43.904-18.6624-4.64896-36.19328-10.22976-52.06016-16.55808-17.15712-7.07072-30.94528-14.8736-41.02656-23.80288-10.26048-8.92928-17.53088-18.42176-22.00576-28.08832-4.48512-9.68192-7.0912-19.73248-7.6544-29.39904-0.55296-9.86112 0-19.53792 1.8688-29.02016 1.30048-7.6288 3.34848-14.14144 5.7856-19.53792a44.97408 44.97408 0 0 1 9.4976-13.76256c3.9168-3.72736 8.21248-7.43936 13.44-10.78272 5.22752-3.52256 10.43968-7.62368 16.22528-12.83584 5.02272-4.45952 9.51296-10.5984 13.7984-18.60608a286.2848 286.2848 0 0 0 10.8032-24.192 343.41376 343.41376 0 0 0 8.59136-29.39392c6.33344-1.86368 12.29824-5.21728 18.08384-10.4192 5.02784-4.46464 9.52832-10.60864 13.7984-18.60608 3.90656-8.00256 7.08608-18.42688 8.96-31.8208 1.30048-10.23488 1.10592-18.60608-0.37888-25.6768-1.49504-7.07072-3.72736-12.65152-6.15936-17.11616-2.42688-5.21728-5.9648-9.11872-10.43968-11.53536 0.54784-25.30304-0.9472-50.7904-4.8384-76.09856-2.98496-21.5808-8.59136-44.4672-16.59904-68.8384a219.37152 219.37152 0 0 0-35.80416-66.98496c-7.11168-8.92416-16.23552-17.66912-27.80672-26.23488-11.19744-8.55552-24.43776-16.18432-38.99392-23.25504-14.72512-7.07072-30.40256-12.65152-47.1808-17.11616s-34.68288-6.7072-52.96128-6.7072c-14.74048 0-29.84448 1.48992-45.33248 3.90656-15.67744 2.7904-30.95552 7.0656-46.24896 13.39392-15.29344 6.32832-30.40256 15.04768-45.32736 26.2144-14.91968 11.1616-28.35456 25.29792-40.47872 42.42432-12.68224 18.23232-22.38464 38.8864-29.09696 61.76256-6.71744 22.8864-11.37664 44.47232-13.7984 64.74752-3.35872 24.18688-4.48512 48.37376-3.92192 72.38144-5.22752 6.50752-9.1392 13.02016-11.56608 20.09088-2.60608 6.3232-4.29056 13.76768-5.22752 22.32832-1.12128 8.55552 0 18.42176 3.1744 29.02528 3.3536 10.78784 7.08608 18.97984 11.56096 24.74496 4.48 5.76512 8.58624 10.23488 12.49792 13.39904a41.42592 41.42592 0 0 0 13.42976 6.69696 1908.60288 1908.60288 0 0 0 9.51808 29.39904 304.91648 304.91648 0 0 0 10.43968 24.18688c3.92704 8.00256 8.21248 14.15168 13.44 18.6112a472.79104 472.79104 0 0 1 29.09696 25.68704c8.58112 8.18176 13.43488 19.91168 14.74048 35.15904 0.55296 9.67168 0.93696 18.6112 0.93696 26.78784 0 8.38144-1.49504 16.1792-4.29056 23.80288-2.7904 7.6288-8.02304 15.25248-15.29344 22.89664-7.2704 7.62368-17.53088 15.63136-30.97088 23.80288-16.4096 10.78272-35.62496 18.97984-57.63072 24.75008-22.01088 5.77024-117.888 38.7072-138.58816 45.76256-20.52096 6.89152-38.60992 16.37376-53.90336 28.48256-15.10912 11.89888-24.6272 29.76256-28.53888 53.21216-6.33344 40.56064-7.64416 47.06816-4.28032 73.11872 3.34848 25.86112 8.57088 41.30816 15.66208 46.52032 5.79072 4.28032 22.20032 9.49248 49.61792 15.63136s199.77728 38.50752 399.91296 38.50752c218.98752 0 374.74304-44.27776 389.65248-49.48992 14.9248-5.21216 24.06912-9.86112 27.24352-14.33088 4.3008-6.88128 7.63392-16.93184 9.88672-30.33088a279.6032 279.6032 0 0 0 3.16416-42.4192c0-14.87872-0.7424-2.9696-2.24256-17.85856-1.5104-14.89408-3.94752-27.17696-7.1168-36.66432z m-372.864 91.34592c-4.6592 5.59104-10.2656 11.35104-16.59904 17.12128-6.34368 5.77024-12.87168 10.4192-19.58912 14.68928-6.71744 4.11136-11.56608 6.14912-14.72512 6.14912-2.97984 0-7.8336-2.24256-14.36672-5.95968a180.49536 180.49536 0 0 1-19.58912-14.69952 135.33184 135.33184 0 0 1-17.152-17.11104c-4.85376-5.77024-7.09632-10.24-7.09632-13.39904 0-5.21728 0.94208-12.84096 3.1744-23.26016 2.24768-10.40896 4.84864-21.5808 7.64416-33.31072a593.792 593.792 0 0 1 8.94976-33.84832c2.43712-8.28928 4.992-16.5376 7.64928-24.75008a106.5216 106.5216 0 0 1-17.53088-18.048c-4.85376-6.31808-7.0912-11.35104-7.0912-15.2576 0-5.20192 1.67424-10.04032 4.84352-15.25248 2.9184-4.86912 6.42048-9.3696 10.43968-13.39904 4.48512-4.45952 9.89696-8.91904 16.2304-13.3888h47.57504c5.7856 4.45952 11.00288 8.92928 16.2304 13.3888 4.46464 3.91168 8.58112 8.38144 11.9296 13.76768 3.53792 5.4016 5.22752 10.4192 5.22752 15.63136 0 6.32832-2.2528 12.47232-6.71744 18.6112-4.47488 5.94944-9.90208 11.35104-16.2304 16.55808 1.85344 7.07072 4.29056 16 6.71744 27.1616 2.432 11.17184 5.22752 22.32832 7.6544 33.8688 2.41664 11.1616 4.83328 21.77024 6.7072 31.25248 1.8688 9.68704 2.79552 16.18944 2.79552 20.10624 0.00512 3.34336-2.22208 7.61344-7.08096 13.37856z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nanbeiganhuo" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1008.512 613.696c-10.304-25.088-25.344-47.616-44.288-66.944-19.264-19.264-41.408-34.432-66.496-44.864-71.04-29.696-131.52-49.472-195.2-49.472-20.352 0-40.384 1.984-60.544 5.76-2.432-9.024-5.632-19.456-9.664-30.08l159.296 0c1.088 0 2.048-0.064 3.2-0.192 33.664-2.88 59.712-29.696 61.824-63.36C857.024 358.208 857.344 352 857.344 345.6c0-36.288-6.784-71.552-20.288-104.896-13.504-33.408-32.96-63.424-57.92-89.088-25.088-25.728-54.336-45.888-86.976-59.904-96.32-40.96-177.92-68.224-263.424-68.224-85.504 0-167.104 27.328-263.424 68.224C132.48 105.664 103.232 125.888 78.208 151.68c-25.088 25.6-44.544 55.616-58.048 89.088C6.784 274.048 0 309.312 0 345.6 0 351.36 0.128 357.312 0.64 364.48c2.432 36.032 32.128 64.064 67.648 64.064l35.776 0c2.112 0 4.032-0.192 6.08-0.512l114.944 0C218.816 444.544 214.528 460.608 211.904 471.808c-28.48 122.944-23.04 261.952 14.4 371.712l0.832 2.752c13.568 41.6 29.76 82.368 66.688 82.688l278.848 0 5.056 40.064c2.176 17.984 17.344 31.36 35.456 31.36l178.56 0c18.048 0 33.28-13.376 35.52-31.36l25.856-207.232 113.344 0c1.024 0 2.048-0.128 3.072-0.128 29.312-2.496 51.968-25.536 53.888-54.784C1023.744 702.144 1024 697.344 1024 692.672 1024 665.344 1018.752 638.784 1008.512 613.696L1008.512 613.696zM104.064 356.544c-2.112 0-4.096 0.192-6.144 0.576L71.808 357.12C71.552 352.896 71.424 349.184 71.424 345.6c0-27.072 5.056-53.376 15.04-78.208 9.984-24.704 24.448-46.912 42.944-65.92C147.84 182.528 169.344 167.808 193.216 157.632c88.128-37.632 161.92-62.656 235.392-62.656 73.344 0 147.136 25.024 235.392 62.656 23.936 10.176 45.44 25.024 63.808 43.904 18.56 19.008 33.024 41.28 43.008 66.048 9.984 24.704 15.04 51.008 15.04 78.08 0 3.712-0.192 7.36-0.384 10.944L104.064 356.608 104.064 356.544 104.064 356.544zM760.256 928.96l-115.52 0-20.864-166.784 157.184 0L760.256 928.96 760.256 928.96zM563.776 857.408l-256 0c-2.752-5.696-6.976-15.68-12.672-33.216L293.888 820.48c-33.344-97.728-37.952-222.08-12.352-332.544 3.84-16.64 14.656-46.72 22.528-59.392l249.28 0C559.616 438.656 567.808 460.032 572.8 476.672 551.744 483.904 530.112 492.352 507.328 501.888 482.368 512.32 460.032 527.36 440.896 546.752 421.76 566.08 406.848 588.608 396.544 613.696c-10.368 25.152-15.552 51.712-15.552 78.976 0 4.224 0.128 8.832 0.512 14.336 2.176 30.848 28.032 55.104 58.944 55.104l25.984 0c1.728 0 3.456-0.192 5.12-0.384l80.256 0L563.776 857.408 563.776 857.408zM466.496 690.368c-1.728 0-3.456 0.064-5.184 0.256L452.48 690.624c0.256-17.216 3.648-33.92 10.176-49.664 6.72-16.512 16.512-31.168 28.992-43.904 12.48-12.608 27.008-22.464 43.2-29.184 63.04-26.368 115.712-43.968 167.616-43.968 51.904 0 104.512 17.536 167.552 43.968 16.256 6.72 30.784 16.576 43.328 29.184 12.48 12.672 22.208 27.392 28.928 43.904 6.592 15.616 9.92 32.192 10.112 49.408L466.496 690.368 466.496 690.368 466.496 690.368z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)