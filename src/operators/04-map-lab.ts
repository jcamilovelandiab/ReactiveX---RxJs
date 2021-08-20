import { fromEvent } from "rxjs";
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl id mauris tristique, at rutrum orci lacinia. Praesent et interdum metus. Vivamus varius eros eu est semper, in rhoncus libero cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vehicula vestibulum quam, sed rhoncus elit tincidunt quis. Maecenas vitae dui egestas, sodales ante ac, porttitor lorem. Cras at nisl a justo sagittis cursus. Suspendisse hendrerit volutpat purus.
<br/><br/>
Aliquam ultrices convallis metus eget vulputate. Cras nec enim mollis, faucibus leo a, blandit orci. Sed non turpis eu ligula congue tristique eu sed dolor. Integer elementum lacus vel magna scelerisque mattis. Vivamus rutrum auctor urna, in porta diam pulvinar eu. Morbi sed magna nunc. Aenean porttitor turpis a tempus venenatis. Praesent quis porttitor nunc, id dapibus felis. Maecenas quis magna libero. Nulla ac mattis lacus. Nam consequat quis sem maximus ultrices. Pellentesque eu mauris feugiat, pretium nisi nec, pretium sapien.
<br/><br/>
Vestibulum tempus mi mauris, eu dapibus eros gravida in. Nulla facilisi. Nam lacinia dolor eget massa venenatis maximus egestas non erat. Nunc interdum ligula nunc, sit amet egestas justo viverra suscipit. Sed in euismod sapien. Vestibulum tempus nec elit quis auctor. Morbi risus turpis, bibendum ut dolor ut, porta laoreet nisl. Fusce pretium felis at hendrerit hendrerit. Nulla egestas laoreet purus sed dictum. Fusce eget magna tincidunt nisl porta hendrerit. Duis iaculis lacinia libero ut aliquet. Duis vel porttitor turpis. Nulla rhoncus porta odio, at viverra nunc imperdiet sollicitudin. Aliquam odio quam, tincidunt ultricies ultricies vitae, blandit vitae nisl. Curabitur pulvinar eleifend eros eu sodales.
<br/><br/>
Donec convallis commodo lectus, id ultricies leo. In gravida mattis sapien vitae pharetra. Ut ac risus sed quam varius molestie. Aliquam ex nulla, posuere at nibh a, vulputate scelerisque erat. Integer sodales metus vel ante commodo, sed mattis risus dapibus. Donec lacinia lorem non lorem molestie interdum. Duis at nisi non tellus rutrum egestas. Duis mauris nulla, dapibus id efficitur vitae, pretium nec sapien.
<br/><br/>
Praesent vel nunc lacus. Proin quis rutrum lectus. Aliquam a semper odio, vel elementum velit. Cras interdum nibh sit amet purus rhoncus, in pharetra ante commodo. Aenean egestas id neque quis scelerisque. Nam quis ipsum eget purus egestas volutpat. Ut quis facilisis quam, ullamcorper pellentesque nunc. Mauris at ornare nisl, a vehicula augue. Suspendisse aliquet, risus ut volutpat scelerisque, eros sem pretium lectus, faucibus varius sem libero sed massa. In elementum felis ac eros tincidunt egestas. In nisl ligula, molestie non urna non, maximus efficitur justo.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl id mauris tristique, at rutrum orci lacinia. Praesent et interdum metus. Vivamus varius eros eu est semper, in rhoncus libero cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vehicula vestibulum quam, sed rhoncus elit tincidunt quis. Maecenas vitae dui egestas, sodales ante ac, porttitor lorem. Cras at nisl a justo sagittis cursus. Suspendisse hendrerit volutpat purus.
<br/><br/>
Aliquam ultrices convallis metus eget vulputate. Cras nec enim mollis, faucibus leo a, blandit orci. Sed non turpis eu ligula congue tristique eu sed dolor. Integer elementum lacus vel magna scelerisque mattis. Vivamus rutrum auctor urna, in porta diam pulvinar eu. Morbi sed magna nunc. Aenean porttitor turpis a tempus venenatis. Praesent quis porttitor nunc, id dapibus felis. Maecenas quis magna libero. Nulla ac mattis lacus. Nam consequat quis sem maximus ultrices. Pellentesque eu mauris feugiat, pretium nisi nec, pretium sapien.
<br/><br/>
Vestibulum tempus mi mauris, eu dapibus eros gravida in. Nulla facilisi. Nam lacinia dolor eget massa venenatis maximus egestas non erat. Nunc interdum ligula nunc, sit amet egestas justo viverra suscipit. Sed in euismod sapien. Vestibulum tempus nec elit quis auctor. Morbi risus turpis, bibendum ut dolor ut, porta laoreet nisl. Fusce pretium felis at hendrerit hendrerit. Nulla egestas laoreet purus sed dictum. Fusce eget magna tincidunt nisl porta hendrerit. Duis iaculis lacinia libero ut aliquet. Duis vel porttitor turpis. Nulla rhoncus porta odio, at viverra nunc imperdiet sollicitudin. Aliquam odio quam, tincidunt ultricies ultricies vitae, blandit vitae nisl. Curabitur pulvinar eleifend eros eu sodales.
<br/><br/>
Donec convallis commodo lectus, id ultricies leo. In gravida mattis sapien vitae pharetra. Ut ac risus sed quam varius molestie. Aliquam ex nulla, posuere at nibh a, vulputate scelerisque erat. Integer sodales metus vel ante commodo, sed mattis risus dapibus. Donec lacinia lorem non lorem molestie interdum. Duis at nisi non tellus rutrum egestas. Duis mauris nulla, dapibus id efficitur vitae, pretium nec sapien.
<br/><br/>
Praesent vel nunc lacus. Proin quis rutrum lectus. Aliquam a semper odio, vel elementum velit. Cras interdum nibh sit amet purus rhoncus, in pharetra ante commodo. Aenean egestas id neque quis scelerisque. Nam quis ipsum eget purus egestas volutpat. Ut quis facilisis quam, ullamcorper pellentesque nunc. Mauris at ornare nisl, a vehicula augue. Suspendisse aliquet, risus ut volutpat scelerisque, eros sem pretium lectus, faucibus varius sem libero sed massa. In elementum felis ac eros tincidunt egestas. In nisl ligula, molestie non urna non, maximus efficitur justo.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl id mauris tristique, at rutrum orci lacinia. Praesent et interdum metus. Vivamus varius eros eu est semper, in rhoncus libero cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vehicula vestibulum quam, sed rhoncus elit tincidunt quis. Maecenas vitae dui egestas, sodales ante ac, porttitor lorem. Cras at nisl a justo sagittis cursus. Suspendisse hendrerit volutpat purus.
<br/><br/>
Aliquam ultrices convallis metus eget vulputate. Cras nec enim mollis, faucibus leo a, blandit orci. Sed non turpis eu ligula congue tristique eu sed dolor. Integer elementum lacus vel magna scelerisque mattis. Vivamus rutrum auctor urna, in porta diam pulvinar eu. Morbi sed magna nunc. Aenean porttitor turpis a tempus venenatis. Praesent quis porttitor nunc, id dapibus felis. Maecenas quis magna libero. Nulla ac mattis lacus. Nam consequat quis sem maximus ultrices. Pellentesque eu mauris feugiat, pretium nisi nec, pretium sapien.
<br/><br/>
Vestibulum tempus mi mauris, eu dapibus eros gravida in. Nulla facilisi. Nam lacinia dolor eget massa venenatis maximus egestas non erat. Nunc interdum ligula nunc, sit amet egestas justo viverra suscipit. Sed in euismod sapien. Vestibulum tempus nec elit quis auctor. Morbi risus turpis, bibendum ut dolor ut, porta laoreet nisl. Fusce pretium felis at hendrerit hendrerit. Nulla egestas laoreet purus sed dictum. Fusce eget magna tincidunt nisl porta hendrerit. Duis iaculis lacinia libero ut aliquet. Duis vel porttitor turpis. Nulla rhoncus porta odio, at viverra nunc imperdiet sollicitudin. Aliquam odio quam, tincidunt ultricies ultricies vitae, blandit vitae nisl. Curabitur pulvinar eleifend eros eu sodales.
<br/><br/>
Donec convallis commodo lectus, id ultricies leo. In gravida mattis sapien vitae pharetra. Ut ac risus sed quam varius molestie. Aliquam ex nulla, posuere at nibh a, vulputate scelerisque erat. Integer sodales metus vel ante commodo, sed mattis risus dapibus. Donec lacinia lorem non lorem molestie interdum. Duis at nisi non tellus rutrum egestas. Duis mauris nulla, dapibus id efficitur vitae, pretium nec sapien.
<br/><br/>
Praesent vel nunc lacus. Proin quis rutrum lectus. Aliquam a semper odio, vel elementum velit. Cras interdum nibh sit amet purus rhoncus, in pharetra ante commodo. Aenean egestas id neque quis scelerisque. Nam quis ipsum eget purus egestas volutpat. Ut quis facilisis quam, ullamcorper pellentesque nunc. Mauris at ornare nisl, a vehicula augue. Suspendisse aliquet, risus ut volutpat scelerisque, eros sem pretium lectus, faucibus varius sem libero sed massa. In elementum felis ac eros tincidunt egestas. In nisl ligula, molestie non urna non, maximus efficitur justo.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl id mauris tristique, at rutrum orci lacinia. Praesent et interdum metus. Vivamus varius eros eu est semper, in rhoncus libero cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vehicula vestibulum quam, sed rhoncus elit tincidunt quis. Maecenas vitae dui egestas, sodales ante ac, porttitor lorem. Cras at nisl a justo sagittis cursus. Suspendisse hendrerit volutpat purus.
<br/><br/>
Aliquam ultrices convallis metus eget vulputate. Cras nec enim mollis, faucibus leo a, blandit orci. Sed non turpis eu ligula congue tristique eu sed dolor. Integer elementum lacus vel magna scelerisque mattis. Vivamus rutrum auctor urna, in porta diam pulvinar eu. Morbi sed magna nunc. Aenean porttitor turpis a tempus venenatis. Praesent quis porttitor nunc, id dapibus felis. Maecenas quis magna libero. Nulla ac mattis lacus. Nam consequat quis sem maximus ultrices. Pellentesque eu mauris feugiat, pretium nisi nec, pretium sapien.
<br/><br/>
Vestibulum tempus mi mauris, eu dapibus eros gravida in. Nulla facilisi. Nam lacinia dolor eget massa venenatis maximus egestas non erat. Nunc interdum ligula nunc, sit amet egestas justo viverra suscipit. Sed in euismod sapien. Vestibulum tempus nec elit quis auctor. Morbi risus turpis, bibendum ut dolor ut, porta laoreet nisl. Fusce pretium felis at hendrerit hendrerit. Nulla egestas laoreet purus sed dictum. Fusce eget magna tincidunt nisl porta hendrerit. Duis iaculis lacinia libero ut aliquet. Duis vel porttitor turpis. Nulla rhoncus porta odio, at viverra nunc imperdiet sollicitudin. Aliquam odio quam, tincidunt ultricies ultricies vitae, blandit vitae nisl. Curabitur pulvinar eleifend eros eu sodales.
<br/><br/>
Donec convallis commodo lectus, id ultricies leo. In gravida mattis sapien vitae pharetra. Ut ac risus sed quam varius molestie. Aliquam ex nulla, posuere at nibh a, vulputate scelerisque erat. Integer sodales metus vel ante commodo, sed mattis risus dapibus. Donec lacinia lorem non lorem molestie interdum. Duis at nisi non tellus rutrum egestas. Duis mauris nulla, dapibus id efficitur vitae, pretium nec sapien.
<br/><br/>
Praesent vel nunc lacus. Proin quis rutrum lectus. Aliquam a semper odio, vel elementum velit. Cras interdum nibh sit amet purus rhoncus, in pharetra ante commodo. Aenean egestas id neque quis scelerisque. Nam quis ipsum eget purus egestas volutpat. Ut quis facilisis quam, ullamcorper pellentesque nunc. Mauris at ornare nisl, a vehicula augue. Suspendisse aliquet, risus ut volutpat scelerisque, eros sem pretium lectus, faucibus varius sem libero sed massa. In elementum felis ac eros tincidunt egestas. In nisl ligula, molestie non urna non, maximus efficitur justo.
`;

const body = document.querySelector('body');
body.append( text );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// function that makes a calculation
const calculateScrollPercentage = ( event: any ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
}

// Streams

const scroll$ = fromEvent( document, 'scroll' );
// scroll$.subscribe( console.log );

const progress = scroll$.pipe(
    map( calculateScrollPercentage ),
    tap( console.log )
);

progress.subscribe( percentage => {
    progressBar.style.width = `${percentage}%`
});