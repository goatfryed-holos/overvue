## Frontend Paradigms
How do we render model changes?

---

### Imperative
```js []
button.addEventListener('click', () => {
    updateMyModel();
    updateElementAThatDependsOnModel();
    updateElementCThatDependsOnModel();
});
```
- vanilla JS
- jQuery

---

### Functional with Reconciliation
```js []
button.addEventListener('click', () => {
    update(nextState);
});
function update(nextState) {
    if ( !hasChanged(prevState, nextState)) return;
    updateSubtreeA(prevState.a,nextState.a);
    updateSubtreeA(prevState.b,nextState.b);
    updateSubtreeB(prevState.c,nextState.c);
}
function updateSubtreeA(prevState,nextState) {
    if ( !hasChanged(prevState, nextState)) return;
    /* ... */
}
/* ... */
```
- react

---

### reactivity
```js []
const model = reactive({ label: "hello"})
watchEffect( () => labelElement.innerText = model.label );
button.addEventListener( 'click', () => model.label = 'Goodbye')
```
- angular
- vaadin
- __vue__