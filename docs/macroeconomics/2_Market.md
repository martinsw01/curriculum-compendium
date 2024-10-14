# 2 Market

The total demand for goods and services produced domestically ($Z$) is given by

$$Z = C + I + G + X - IM.$$

If we assume

- homogeneous goods and services
- constant prices
- closed economy (no exports or imports)
- no storage changes
- static model, no time dependency

we can simplify to

$$Z = C + I + G.$$


## Private consumption

Consumption depends positively on disposable income ($Y_D$): $C = C(Y_D)$. The more disposable income, the more consumption:

$$0 \le \frac{dC}{dY_D} \le 1.$$

One often use the spaceial case of an affine consumption function:

$$C = c_0 + c_1 Y_D,$$

where $c_1, c_2 > 0$ are positive constants. The marginal propensity to consume $c_1$ indicates how much of an increase in disposable income that is consumed. The constant $c_0$ is the autonomous consumption, the consumption that is independent of disposable income.

Disposable income is income ($Y$) adjusted for taxes and transfers:

$$Y_D = Y - T,$$

where $T$ is taxes minus transfers. Then, the consumption function becomes

$$C = c_0 + c_1 (Y - T).$$

## Investment

For now, we wil assume that the investments are exogenously given in the model.

## Government consumption

Together with taxes ($T$), government consumption ($G$) makes up the fiscal instruments in the model. It is assumed ot be exogenous. Therefore, we get the following model:

$$
\begin{align}
Z &= C + I + G, \label{eq:Z} \tag{1} \\
C &= c_0 + c_1 (Y - T), \label{eq:C}\tag{2} \\
Y &= Z, \label{eq:Y} \tag{3} \\
\end{align}
$$

Equation $\eqref{eq:Y}$ is the equilibrium condition. What is offered of goods ($Y$) is equal to what is demanded ($Z$).

| Type | Variable | 
|------|----------|
| Endogenous | $Z, C, Y$ |
| Exogenous | $I, G, T$ |
| Parameters | $c_0, c_1$ |

Inserting $\eqref{eq:C}$ into $\eqref{eq:Z}$ gives the total demand

$$Z = c_0 + c_1 (Y - T) + I + G.$$

### Analytic solution

Inserting $\eqref{eq:C}$ and $\eqref{eq:Y}$ into $\eqref{eq:Z}$ and solving for $Y$ gives

$$Y = \frac{1}{1 - c_1} (c_0 + I + G - c_1 T).$$

When the government increases its consumption,

$$\frac{\partial Y}{\partial G} = \frac{1}{1 - c_1} > 1.$$

we see that the production increases more than the increase in government consumption.

$$
\begin{align}
    \frac{\partial Y}{\partial G} &= \frac{\partial Y}{\partial G} \frac{\partial C}{\partial Y}(Y-T) + 1 \\
    &= \frac{1}{1 - \frac{\partial C}{\partial Y}} > 1.
\end{align}
$$

This results in some ripple effects.

???+ example
    Assume an increase in government spending by $100$ million and $c_1 = 0.5$,

    | Round | Production increase (million) |
    |-------|-------------------------------|
    | 1     | $100$                         |
    | 2     | $c_1 \cdot 100 = 50$          |
    | 3     | $c_1^2 \cdot 100 = 25$        |
    | 4     | $c_1^3 \cdot 100 = 12.5$      |
    | 5     | $c_1^4 \cdot 100 = 6.25$      |
    | ...   | ...                           |

    In total, we have $\Delta Y = \frac{1}{1 - c_1} \Delta G = \frac{1}{1 - 0.5} \cdot 100 = 200$ million.


### Balanced budgeting

The change of $Y$ with respect to $T$ is given by

$$
\begin{align}
    \frac{\partial Y}{\partial T} &= \left(\frac{\partial Y}{\partial T} - 1 \right) C'(Y-T) \\
    &= \frac{-C'(Y-T)}{1 - C'(Y-T)} < 0.
\end{align}
$$

which, as one would expect, is negative. Additionally , we get that $\frac{\partial Y}{\partial G} + \frac{\partial Y}{\partial T} =  1$. Now, assuming the budget is balanced, $dT = dG$, we get

$$\Delta Y = \int Y' = \int \frac{\partial Y}{\partial G} dG + \frac{\partial Y}{\partial T} dT = \int dG = \Delta G > 0,$$

so the production increases as much as the government spending increases. Additionally, as $\Delta Y = \Delta G = \Delta T$, we get that $\Delta C = 0$, so the consumption is unaffected by the change in government spending.


## Saving and investment

In a closed economy, the savings consists of private and government savings. The government savings is the budget surplus

$$T - G$$

and the private savings is the difference between disposable income and consumption

$$S = Y_D - C = Y - T - C.$$

Recall that the equilibrium condition in the market is given by

$$Y = C + I + G,$$

so the saveings can also be written as

$$S = I + G - T.$$

Then, we can express the investments as

$$I = S + (T - G),$$

so it is the sum of private and government saving.


### The paradox of thrift

Assume that the consumers choose to save more, despite unchanged disposable income. One might expect the total savings to increase. However, this leads to lower production, canselling out the perceived savings.

We assume investments and government savings $(T-G)$ remains unchanged. We add the term $z^C$ capturing the change in consumption:

$$C = c(Y - T) + z^C,$$

This yields the change in $Y$

$$dY = \frac{1}{1 - c'} (-c' dT + dI + dG + dz^C).$$

The total change in savings is given by

$$
\begin{aligned}
    dS &= dY - dT - dC \\
    &= (1 - c') (dY - dT) - dz^C
\end{aligned}
$$

Then, inserting for $dY$, assuming $dI=0$ gives $dS = 0$.